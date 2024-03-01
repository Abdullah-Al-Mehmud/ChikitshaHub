/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { MdOutlineVideoChat } from "react-icons/md";
import { Link } from "react-router-dom";
import moment from "moment-timezone";
const JoinLive = () => {
  const user = useSelector((state) => state.auth.user);
  const [openModal, setOpenModal] = useState(false);

  const axios = useAxiosPublic();
  const { displayName, email } = user || {};
  const { data: liveStrem = [], refetch } = useQuery({
    queryKey: ["liveStrem"],
    queryFn: async () => {
      const res = await axios.get(`/doctorlive`);
      return res.data;
    },
  });
  //   console.log(liveStrem);
  return (
    <div>
      <div className="w-[90%] mx-auto lg:mt-24 mt-10">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-2 m-2">
          {liveStrem?.map((dd) => (
            <div key={dd._id} className="bg-blue-500 w-full  rounded-md">
              <div className="p-2 text-white flex justify-between">
                <div>
                  <h1 className="text-xl">Dr. {dd.doctorName}</h1>
                  <h1 className="text-lg">Topic: {dd.tagline}</h1>
                  <h1 className="text-base">Description: {dd.description}</h1>
                  {/* <h1>
                    {dd.status === "approved"
                      ? "Event Request Approved"
                      : "Event Request Pending"}
                  </h1> */}
                  <div className="flex gap-2 text-base">
                    {/* <h1>Event Date and Time</h1> */}
                    <span>
                      {(() => {
                        const btcYear = moment
                          .utc(dd.dateTime)
                          .tz("Asia/Dhaka")
                          .format("YYYY-MM-DD");
                        return btcYear;
                      })()}
                    </span>
                    <span>
                      {(() => {
                        const btcTime = moment
                          .utc(dd.dateTime)
                          .tz("Asia/Dhaka")
                          .format("h:mm A");
                        return btcTime;
                      })()}
                    </span>
                  </div>
                </div>
                {/* http://localhost:5173/live/8G8kwP/host?roomID=8G8kwP&role=Audience */}
                <div className="  flex flex-col justify-center">
                  {dd.status === "approved" ? (
                    <Link
                      to={`/live/${dd.liveId}/host?roomID=${dd.liveId}&role=Audience}`}
                    >
                      <button className="flex items-center justify-center p-2 bg-white rounded-md btn text-blue-500">
                        <MdOutlineVideoChat className="text-xl" />
                        Streaming Now
                      </button>
                    </Link>
                  ) : (
                    <span className="text-white">Request Pending</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JoinLive;
