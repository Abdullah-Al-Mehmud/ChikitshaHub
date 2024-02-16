/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const DoctorReq = () => {
  const axiosPublic = useAxiosPublic();
  const [openModal, setOpenModal] = useState(false);
  const { data: docReq = [], refetch } = useQuery({
    queryKey: ["docReq"],
    queryFn: async () => {
      const res = await axiosPublic.get("/doctors");
      return res.data;
    },
  });
  const column = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    // {
    //   name: "BMDC Number",
    //   selector: (row) => row.bmdcNumber,
    // },
    // {
    //   name: "Joining Date",
    //   selector: (row) => row.joiningDate,
    // },

    {
      name: "profile",
      selector: (row) => (
        <Link to={`doctorProfileReview/${row._id}`}>Review Profile</Link>
      ),
    },
    // {
    //   name: "Status",
    //   selector: () => {
    //     <button>Panding</button>;
    //   },
    // },
    {
      name: "status",
      cell: () => <h1 className="text-red-700 font-bold">Panding</h1>,
    },
  ];

  return (
    <>
      <div
        className="w-4/5 mx-auto overflow-x-auto font-medium text-slate-700"
        style={{ paddingTop: "10px", backgroundColor: "gray" }}
      >
        <DataTable columns={column} data={docReq} pagination></DataTable>
      </div>
    </>
  );
};

export default DoctorReq;
