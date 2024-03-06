/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { IoEyeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useEffect, useState } from "react";
import TableSearch from "../../../../Components/tableSearch/TableSearch";
import Swal from "sweetalert2";
import useAxiosPrivet from "../../../../Hooks/useAxiosPrivet";

const AdminAllDoctor = () => {
  // const queryClient = useQueryClient();
  const columnHelper = createColumnHelper();
  const [globalFilter, setGlobalFilter] = useState("");
  const axios = useAxiosPrivet();
  const { data: Alldoctors = [], refetch } = useQuery({
    queryKey: ["Alldoctors"],
    queryFn: async () => {
      const res = await axios.get("/doctors");
      return res.data;
    },
  });
  // const refreshData = async () => {
  //   await queryClient.invalidateQueries("appointment");
  // };
  // useEffect(() => {
  //   refreshData();
  // }, []);
  // console.log(appointments);
  // table dec colum
  console.log(Alldoctors);
  const handleUpdate = async (id) => {
    const { isConfirmed } = await Swal.fire({
      title: "sure to update?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "update",
      denyButtonText: `Cancel`,
    });

    if (isConfirmed) {
      try {
        const response = await axios.patch(
          `/doctors/admin/statusUpdate/${id}`,
          {}
        );
        Swal.fire("Updated!", "Doctor Status has been Updated.", "success");
      } catch (error) {
        console.error("Error Updating doctor status:", error);
        Swal.fire("Error", "Failed to approve doctor update request.", "error");
      }
    } else {
      Swal.fire(
        "Cancelled",
        "Doctor Status Update request approval was cancelled.",
        "info"
      );
    }
  };
  const handleDelete = (dataId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`/doctors/admin/docDelete/${dataId}`).then(async (res) => {
          console.log(res.statusText);
          if (res.statusText === "OK") {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      } else if (result.dismiss === "cancel") {
        Swal.fire({
          title: "Cancelled",
          text: "Your donation camp is safe!",
          icon: "info",
        });
      }
    });
  };
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
        <>
          <span>{info.getValue()}</span>
        </>
      ),
      header: "Email",
    }),
    columnHelper.accessor("status", {
      cell: (info) => (
        <>
          <span className="text-blue-600 font-semibold">{info.getValue()}</span>
        </>
      ),
      header: "Status",
    }),
    columnHelper.accessor("action", {
      cell: (props) => {
        const { row } = props || {};
        return (
          <>
            <div className="">
              <button
                onClick={() => handleDelete(row.original._id)}
                className="btn btn-sm btn-error"
              >
                Delete
              </button>
            </div>
          </>
        );
      },
      header: "Delete",
    }),
  ];

  const table = useReactTable({
    data: Alldoctors,
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
export default AdminAllDoctor;
