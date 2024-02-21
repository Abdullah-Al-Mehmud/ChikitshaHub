/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useQuery, useQueryClient } from "@tanstack/react-query";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";

import { useEffect, useState } from "react";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import TableSearch from "../../../../Components/tableSearch/TableSearch";

const AdminAppointment = () => {
  const queryClient = useQueryClient();
  const columnHelper = createColumnHelper();
  const axios = useAxiosPublic();
  const [globalFilter, setGlobalFilter] = useState("");
  const axiosPublic = useAxiosPublic();
  const { data: appointments = [], refetch } = useQuery({
    queryKey: ["appointments"],
    queryFn: async () => {
      const res = await axiosPublic.get("/appointments");
      return res.data;
    },
  });
  const refreshData = async () => {
    await queryClient.invalidateQueries("appointments");
  };
  useEffect(() => {
    refreshData();
  }, []);
  // console.log(appointments);

  // table dec colum
  const columns = [
    columnHelper.accessor("", {
      id: "S.No",
      cell: (info) => <span>{info.row.index + 1}</span>,
      header: "S.No",
    }),
    columnHelper.accessor("doctorCode", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "DoctorCode",
    }),

    columnHelper.accessor("doctorName", {
      cell: (info) => <span>{info.getValue() ? info.getValue() : "Dr."}</span>,
      header: "Doctor Name",
    }),

    columnHelper.accessor("patientName", {
      cell: (info) => <span>{info.getValue() ? info.getValue() : "user"}</span>,
      header: "Patient Name",
    }),

    // columnHelper.accessor("patientEmail", {
    //   cell: (info) => (
    //     <span>{info.getValue() ? info.getValue() : "not have an email"}</span>
    //   ),
    //   header: "Patient Email",
    // }),

    columnHelper.accessor("appointmentTime", {
      cell: (info) => {
        const date = info.getValue();
        if (date) {
          const [datePart, timePart] = date.split("T");
          var [hours, minutes] = timePart.split(":").slice(0, 2);
          let ampm = hours >= 12 ? "PM" : "AM";
          hours = hours % 12;
          hours = hours ? hours : 12;
          return (
            <>
              <div className="flex gap-1">
                <span className="text-slate-950 bg-opacity-30 bg-blue-200 rounded-md px-2 text-sm py-1">
                  {datePart}
                </span>
                <div className="flex text-slate-950 bg-opacity-30 bg-rose-200 rounded-md px-2 text-sm py-1">
                  <span>{hours}</span>
                  <span>:</span>
                  <span>{minutes}</span>
                  <span> {ampm}</span>
                </div>
              </div>
            </>
          );
        } else {
          return <span className="text-red-500">Wrong Appointment</span>;
        }
      },
      header: "Date & Time",
    }),

    // delete

    // columnHelper.accessor("action", {
    //   cell: () => {
    //     return (
    //       <>
    //         <div className="flex gap-3 font-normal">
    //           <div>
    //             <div>
    //               <div>{/* <h1>{editedData.specialties}</h1> */}</div>
    //             </div>
    //           </div>
    //           <button className="btn btn-sm btn-error">Delete</button>
    //         </div>
    //       </>
    //     );
    //   },
    //   header: "description",
    // }),

    // delete
  ];

  // table
  const table = useReactTable({
    data: appointments,
    columns,
    state: { globalFilter },
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <>
      <div className="p-2 max-w-5xl mx-auto text-black">
        <div className="flex justify-between mb-2">
          <div className="w-full flex items-center gap-1">
            <TableSearch
              value={globalFilter ?? ""}
              onChange={(value) => setGlobalFilter(String(value))}
              className="p-2 bg-transparent outline-none border-b-2 w-1/5 focus:w-1/3 duration-300 border-indigo-100 text-black"
              placeholder="Search all columns..."
            />
          </div>
        </div>
        <table className="border border-gray-50 w-full text-left">
          <thead className="bg-indigo-100">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="capitalize px-3.5 py-2">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row, i) => (
                <tr
                  key={row.id}
                  className={`${i % 2 === 0 ? "bg-gray-100" : "bg-gray-50"}`}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="px-3.5 py-2">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr className="text-center h-32">
                <td colSpan={12}>No Record Found!</td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="flex items-center justify-end mt-2 gap-2">
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="p-1 border border-gray-300 px-2"
          >
            {"<"}
          </button>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="p-1 border border-gray-300 px-2"
          >
            {">"}
          </button>
          <span className="flex items-center gap-1">
            <div>Page</div>
            <strong>
              {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </strong>
          </span>
          <span className="flex items-center gap-1">
            | Go to page:
            <input
              type="number"
              defaultValue={table.getState().pagination.pageIndex + 1}
              onChange={(e) =>
                table.setPageIndex(
                  e.target.value ? Number(e.target.value) - 1 : 0
                )
              }
              className="border p-1 rounded w-16 bg-transparent"
            />
          </span>
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => table.setPageSize(Number(e.target.value))}
            className="p-2 bg-transparent"
          >
            {[10, 20, 30, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};
export default AdminAppointment;
