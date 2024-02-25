/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { FaUserDoctor } from "react-icons/fa6";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
const DoctorHome = () => {
  const user = useSelector((state) => state.auth.user);
  const { photoURL, email, displayName } = user || {};
  const axios = useAxiosPublic();
  const { data: DocprofileData = [], refetch } = useQuery({
    queryKey: ["DocprofileData"],
    queryFn: async () => {
      const res = await axios.get(`/appointments/doctors/${user.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <div className="mt-5 grid grid-cols-3 gap-1">
        {/* <div className="bg-blue-500 rounded-md p-5 m-2 text-white text-lg">
          <span className="flex justify-between">
            <span>
              <FaUserDoctor className="text-4xl" />
            </span>
            <h1 className="text-4xl">20</h1>
          </span>
          <h1 className="pt-2 text-lg font-medium">Doctors</h1>
        </div> */}
        <div className="bg-blue-500 rounded-md p-5 m-2 text-white text-lg">
          <span className="flex justify-between">
            <span>
              <FaUserDoctor className="text-4xl" />
            </span>
            <h1 className="text-4xl">{DocprofileData.length}</h1>
          </span>
          <h1 className="pt-2 text-lg font-medium">Patients</h1>
        </div>
        <div className="bg-blue-500 rounded-md p-5 m-2 text-white text-lg">
          <span className="flex justify-between">
            <span>
              <FaUserDoctor className="text-4xl" />
            </span>
            <h1 className="text-4xl">{DocprofileData.length}</h1>
          </span>
          <h1 className="pt-2 text-lg font-medium">Appointments</h1>
        </div>
        <div className="bg-blue-500 rounded-md p-5 m-2 text-white text-lg">
          <span className="flex justify-between">
            <span>
              <FaUserDoctor className="text-4xl" />
            </span>
            <h1 className="text-4xl">300</h1>
          </span>
          <h1 className="pt-2 text-lg font-medium">Revenue</h1>
        </div>
      </div>
    </div>
  );
};

export default DoctorHome;
