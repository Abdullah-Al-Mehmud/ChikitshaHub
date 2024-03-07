/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
// import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import TableSearch from "../../../../Components/tableSearch/TableSearch";
import { Link } from "react-router-dom";
import useAxiosPrivet from "../../../../Hooks/useAxiosPrivet";

const DoctorReq = () => {
  // const queryClient = useQueryClient();
  const columnHelper = createColumnHelper();
  const axios = useAxiosPrivet();
  const [globalFilter, setGlobalFilter] = useState("");
  const { data: docReq = [] } = useQuery({
    queryKey: ["docReq"],
    queryFn: async () => {
      try {
        const res = await axios.get("/doctors/admin/docReq");
        return res.data;
      } catch (error) {
        console.error("Error fetching data:", error);
        return [];
      }
    },
  });
  const columns = [
    columnHelper.accessor("", {
      id: "S.No",
      cell: (info) => <span>{info.row.index + 1}</span>,
      header: "S.No",
    }),
    columnHelper.accessor("name", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Name",
    }),

    columnHelper.accessor("doctorEmail", {
      cell: (info) => (
        <span>{info.getValue() ? info.getValue() : "not have an email"}</span>
      ),
      header: "Doctor Email",
    }),
    columnHelper.accessor("_id", {
      cell: (info) => (
        <>
          <Link
            to={`doctorProfileReview/${info.getValue()}`}
            className="bg-blue-100 px-2 py-1 rounded-md font-semibold text-blue-950"
          >
            View Profile
          </Link>
        </>
      ),
      header: "View profile",
    }),
    columnHelper.accessor("status", {
      cell: (info) => (
        <span className="text-rose-600 font-semibold">{info.getValue()}</span>
      ),
      header: "Status",
    }),
  ];

  const table = useReactTable({
    data: docReq,
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
        <div className="overflow-y-scroll overflow-scroll">
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
        </div>
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

export default DoctorReq;
