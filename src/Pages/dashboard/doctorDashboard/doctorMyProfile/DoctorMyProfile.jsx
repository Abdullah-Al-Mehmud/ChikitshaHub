/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Link, Navigate, useLoaderData } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSelector, useDispatch } from "react-redux";
import useAxiosPrivet from "../../../../Hooks/useAxiosPrivet";
import DoctorMyProfileEdit from "./DoctorMyProfileEdit";
const DoctorMyProfile = () => {
  const user = useSelector((state) => state.auth.user);
  const [openModal, setOpenModal] = useState(false);
  const { photoURL, displayName, email } = user || {};
  const axios = useAxiosPrivet();
  const { data: doctor = [], refetch } = useQuery({
    queryKey: ["doctor"],
    queryFn: async () => {
      const res = await axios.get(`/doctors/2/${email}`);
      return res.data;
    },
  });
  // console.log(email);
  // console.log("doctor", doctor);
  // const [shouldNavigate, setShouldNavigate] = useState(false);
  return (
    <div>
      <div className="max-w-full mx-auto px-6 lg:py-6 lg:pt-5 pt-10">
        <div className="flex flex-col  md:flex-row gap-6 items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="w-60 rounded-xl ">
              <img src={photoURL} className="mb-2" />
              <div>
                <Link
                  to="update"
                  className=" btn btn-sm bg-sky-500 px-5 py-[6px] text-white hover:bg-white hover:text-sky-500"
                >
                  Edit Profile
                </Link>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold">
                {doctor?.name}{" "}
                {/* <span className="text-sm font-semibold text-gray-600">
                  ({doctor?.degrees[0]}, {doctor?.degrees[1]})
                </span> */}
                <span className="text-sm font-semibold text-gray-600">
                  (
                  {doctor?.degrees?.map((dd, index) => (
                    <span key={index}>{dd}</span>
                  ))}
                  )
                </span>
              </h4>
              <p className="text-sm font-semibold text-gray-600 my-2">
                {doctor?.specialties}
              </p>
              <p className="text-sm font-medium text-gray-600 flex gap-2">
                {doctor?.specializations?.map((dd) => (
                  <p key={dd}>{dd}</p>
                ))}
              </p>

              <h4 className="text-lg font-medium text-gray-600 mt-2">
                Working at{" "}
                <span className="text-lg font-semibold text-black">
                  {doctor?.location}
                </span>
              </h4>
            </div>
          </div>
          <div className="text-center">
            <h4 className="text-xl font-bold">Consultation Fee</h4>
            <h3 className="text-2xl font-bold text-[#409bd4] my-2">
              $ {doctor?.fee}{" "}
              <span className="text-sm font-bold text-gray-600">
                (incl. VAT)
              </span>
            </h3>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6 my-10">
          <h4 className="text-xl font-normal text-gray-600">
            Total Experience <br />{" "}
            <span className="text-black font-semibold">
              {doctor?.experience?.year} + Years
            </span>
          </h4>
          <h4 className="text-xl font-normal text-gray-600">
            BMDC Number <br />{" "}
            <span className="text-black font-semibold">
              {doctor?.bmdcNumber}
            </span>
          </h4>
          <h4 className="text-xl font-normal text-gray-600">
            Joined ChikitshaHub <br />{" "}
            <span className="text-black font-semibold">
              {doctor?.joiningDate}
            </span>
          </h4>
        </div>

        <Tabs>
          <TabList>
            <Tab>Info</Tab>
            <Tab>Experience</Tab>
          </TabList>

          <TabPanel>
            <div className="flex flex-col md:flex-row gap-10 mt-8">
              <div className="md:w-1/2">
                <h2 className="text-xl font-bold">About {doctor?.name}</h2>
                <p className="mt-2 font-medium text-gray-600">
                  {doctor?.aboutDoctor}
                </p>
              </div>
              <div className="md:w-1/2">
                <div>
                  <h4 className="text-xl font-bold mb-2">Availability</h4>
                  <div className="border-l-4 p-2 border-l-[#409bd4]">
                    <h6 className="text-lg font-medium text-gray-600">
                      Instant Consultation Time
                    </h6>
                    <h4 className="text-lg flex font-bold">
                      {doctor?.availability?.map((avail, index) => (
                        <React.Fragment key={index}>
                          <p className="">{avail}</p>
                          {index < doctor?.availability?.length - 1 && (
                            <span>, </span>
                          )}
                        </React.Fragment>
                      ))}
                    </h4>
                  </div>
                </div>
                <div className="my-6">
                  <h4 className="text-xl font-bold mb-2">At a Glance</h4>
                  <div className="flex gap-4 mb-4">
                    <div className="border-l-4 p-2 border-l-[#409bd4]">
                      <h6 className="text-lg font-medium text-gray-600">
                        Consultation Fee
                      </h6>
                      <h4 className="text-lg font-bold">
                        $ {doctor?.fee}{" "}
                        <span className="text-sm font-bold text-gray-600">
                          (Incl.VAT)
                        </span>
                      </h4>
                    </div>
                    <div className="border-l-4 p-2 border-l-[#409bd4]">
                      <h6 className="text-lg font-medium text-gray-600">
                        Follow-Up Fee
                      </h6>
                      <h4 className="text-lg font-bold">
                        $ {doctor?.followUpFee}{" "}
                        <span className="text-sm font-bold text-gray-600">
                          (Incl.VAT)
                        </span>
                      </h4>
                      <p>(Within 14 Days)</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="border-l-4 p-2 border-l-[#409bd4]">
                      <h6 className="text-lg font-medium text-gray-600">
                        Doctor Code
                      </h6>
                      <h4 className="text-lg font-bold">
                        {doctor?.doctorCode}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-8">
              <h4 className="text-xl font-bold mb-2">
                {doctor?.experience?.hospitalName}
              </h4>
              <div className="border-l-4 p-2 border-l-[#409bd4]">
                <h6 className="text-lg font-medium text-gray-600">
                  {doctor?.experience?.start} - {doctor?.experience?.end}
                </h6>
                <h4 className="text-lg font-bold">
                  {" "}
                  Experience: {doctor?.experience?.year} + Years
                </h4>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default DoctorMyProfile;
