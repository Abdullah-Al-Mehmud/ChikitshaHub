/* eslint-disable no-unused-vars */
import React from "react";
import { FaUserDoctor } from "react-icons/fa6";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../../../../api/getApi";
const AdminHome = () => {
  const axios = useAxiosPublic();
  const { data: doctors = [] } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await axios.get("/doctors");
      return res.data;
    },
  });
  // const { data: pateints = [] } = useQuery({
  //   queryKey: ["pateintsAll"],
  //   queryFn: async () => {
  //     const res = await getAllUsers();
  //     return res.data;
  //   },
  // });
  console.log("doctors", doctors);
  // console.log("pateints", pateints);
  return (
    <div>
      <div className="mt-5 grid grid-cols-4 gap-1">
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
              <FaUserDoctor className="text-4xl" />
            </span>
            <h1 className="text-4xl">{doctors.length}</h1>
          </span>
          <h1 className="pt-2 text-lg font-medium">Patients</h1>
        </div>
        <div className="bg-blue-500 rounded-md p-5 m-2 text-white text-lg">
          <span className="flex justify-between">
            <span>
              <FaUserDoctor className="text-4xl" />
            </span>
            <h1 className="text-4xl">{doctors.length}</h1>
          </span>
          <h1 className="pt-2 text-lg font-medium">Appointments</h1>
        </div>
        <div className="bg-blue-500 rounded-md p-5 m-2 text-white text-lg">
          <span className="flex justify-between">
            <span>
              <FaUserDoctor className="text-4xl" />
            </span>
            <h1 className="text-4xl">{doctors.length}</h1>
          </span>
          <h1 className="pt-2 text-lg font-medium">Revenue</h1>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
