/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useQuery, useQueryClient } from "@tanstack/react-query";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import moment from "moment-timezone";
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
import { useSelector } from "react-redux";
import { FaVideo } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const UserAppointment = () => {
  const user = useSelector((state) => state.auth.user);
  const [meet, setMeet] = useState("");
  const queryClient = useQueryClient();
  const columnHelper = createColumnHelper();
  const axios = useAxiosPublic();
  const [globalFilter, setGlobalFilter] = useState("");
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const { data: appointments = [], refetch } = useQuery({
    queryKey: ["appointments"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/appointments/patients/${user.email}`);
      return res.data;
    },
  });
  const refreshData = async () => {
    await queryClient.invalidateQueries("appointments");
  };
  const handleMeetId = () => {
    navigate(`/meet/${meet}`);
  };
  useEffect(() => {
    refreshData();
  }, []);
  // console.log(appointments);
  // console.log(user?.email);
  // date convert to real format
  // const [formattedTimestamp, setFormattedTimestamp] = useState('');

  // useEffect(() => {
  //   const timestampStr = (appointments.appointmentTime);
  //   const timestampObj = new Date(timestampStr);

  //   // Format the timestamp as a string
  //   const formattedTimestamp = timestampObj.toLocaleString(); // You can use other formatting options as needed

  //   setFormattedTimestamp(formattedTimestamp);
  // }, []);
  // console.log(formattedTimestamp);
  // table
  const columns = [
    columnHelper.accessor("", {
      id: "S.No",
      cell: (info) => <span>{info.row.index + 1}</span>,
      header: "S.No",
    }),
    columnHelper.accessor("doctorCode", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: <h1 className="w-24">DoctorCode</h1>,
    }),

    columnHelper.accessor("doctorName", {
      cell: (info) => (
        <span>{info.getValue() ? info.getValue() : "not have an email"}</span>
      ),
      header: <h1 className="w-40">Doctor Name</h1>,
    }),

    columnHelper.accessor("meetingId", {
      cell: (info) => (
        <span>{info.getValue() ? info.getValue() : "not have an email"}</span>
      ),
      header: <h1 className="w-24">Meeting Id</h1>,
    }),
    columnHelper.accessor("meetingId", {
      cell: (info) => (
        <>
          <div className="w-28">
            <Link to={`/meet/${info.getValue()}`}>
            <button
              className="flex items-center relative mx-auto border-2 border-blue-500 text-blue-500 px-4 py-1 rounded-full group mt-4 lg:text-lg text-sm font-semibold mb-4 w-24"
            >
              <span>Join</span>
              <span className="absolute w-1/6 right-3 group-hover:w-5/6 box-content duration-300 flex justify-center bg-slate-100 rounded-full">
                <FaVideo className="h-6" />
              </span>
            </button>
            </Link>
          </div>
        </>
      ),
      header: "Join Meeting",
    }),
    columnHelper.accessor("fee", {
      cell: (info) => (
        <span>{info.getValue() ? info.getValue() : "not have an email"}</span>
      ),
      header: <h1 className="w-20">Fee</h1>,
    }),

    columnHelper.accessor("appointmentTime", {
      cell: (info) => {
        const date = info.getValue();
        // console.log(date);
        const btcYear = moment.utc(date).tz("Asia/Dhaka").format("YYYY-MM-DD");
        const btcTime = moment.utc(date).tz("Asia/Dhaka").format("h:mm A");
        // console.log(btcTime);
        if (btcTime && btcYear) {
          return (
            <>
              <div className="flex gap-1">
                <span className="text-slate-950 bg-opacity-30 bg-blue-200 rounded-md px-2 text-sm py-1">
                  {btcYear}
                </span>
                <div className="flex text-slate-950 bg-opacity-30 bg-rose-200 rounded-md px-2 text-sm py-1">
                  <span>{btcTime}</span>
                </div>
              </div>
            </>
          );
        } else {
          return <span className="text-red-500">Wrong Appointment</span>;
        }
      },
      header: <h1 className="w-44">Date & Time</h1>,
    }),

    // columnHelper.accessor("appointmentTime", {
    //   cell: () => {
    //     return (
    //       <>
    //         <div className="flex gap-3 font-normal">
    //           <div>
    //             <div>
    //               <div>{/* <h1>{editedData.specialties}</h1> */}</div>
    //             </div>
    //           </div>
    //          <span>{formattedTimestamp}</span>
    //         </div>
    //       </>
    //     );
    //   },
    //   header: "AppointmentTime",
    // }),
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
      <div className="p-2 max-w-5xl mx-auto text-black mt-20 h-screen bg-white">
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
          {/* <span className="flex items-center gap-1">
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
          </span> */}
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
export default UserAppointment;
