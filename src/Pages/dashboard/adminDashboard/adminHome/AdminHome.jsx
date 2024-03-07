/* eslint-disable no-unused-vars */
import React from "react";
import { FaUserDoctor } from "react-icons/fa6";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { BsFillFileEarmarkMedicalFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
const AdminHome = () => {
  const axios = useAxiosPublic();
  const { data: doctors = [], refetch: docFatch } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await axios.get("/doctors");
      return res.data;
    },
  });
  const { data: pateints = [], refetch: preFatch } = useQuery({
    queryKey: ["pateintsAll"],
    queryFn: async () => {
      const res = await axios.get("/users");
      return res.data;
    },
  });
  const { data: appointments = [], refetch: appointFetch } = useQuery({
    queryKey: ["appointmentsAll"],
    queryFn: async () => {
      const res = await axios.get("/appointments");
      return res.data;
    },
  });
  var x = 0;
  // console.log(doctors);
  // console.log(pateints);
  // console.log(appointments);
  // console.log("pateints", pateints);
  return (
    <div>
      <div className="my-5 grid lg:grid-cols-4 grid-cols-2 gap-1">
        <div className="bg-blue-500 rounded-md p-5 m-2 text-white text-lg">
          <span className="flex justify-between">
            <span>
              <FaUserDoctor className="text-4xl" />
            </span>
            <h1 className="text-4xl">{doctors.length}</h1>
          </span>
          <h1 className="pt-2 text-lg font-medium">Doctors</h1>
        </div>
        <div className="bg-blue-500 rounded-md p-5 m-2 text-white text-lg">
          <span className="flex justify-between">
            <span>
              <FaUsers className="text-4xl" />
            </span>
            <h1 className="text-4xl">{pateints.length}</h1>
          </span>
          <h1 className="pt-2 text-lg font-medium">Patients</h1>
        </div>
        <div className="bg-blue-500 rounded-md p-5 m-2 text-white text-lg">
          <span className="flex justify-between">
            <span>
              <BsFillFileEarmarkMedicalFill className="text-4xl" />
            </span>
            <h1 className="text-4xl">{appointments.length}</h1>
          </span>
          <h1 className="pt-2 text-lg font-medium">Appointments</h1>
        </div>
        <div className="bg-blue-500 rounded-md p-5 m-2 text-white text-lg">
          <span className="flex justify-between">
            <span>
              <FaMoneyBillTrendUp className="text-4xl" />
            </span>
            <h1 className="text-4xl">
              {appointments.reduce((x, y) => x + y.fee, 0)}
            </h1>
          </span>
          <h1 className="pt-2 text-lg font-medium">Revenue</h1>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
