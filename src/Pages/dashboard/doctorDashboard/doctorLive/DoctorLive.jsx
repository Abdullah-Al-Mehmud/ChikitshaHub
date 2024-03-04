/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import DoctorLiveForm from "./DoctorLiveForm";
import { MdVideoChat } from "react-icons/md";
import { useSelector } from "react-redux";
import { MdOutlineVideoChat } from "react-icons/md";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import moment from "moment-timezone";
import { Link } from "react-router-dom";
// import useBdTime from "../../../../Utils/useBdTime";
const DoctorLive = () => {
  const user = useSelector((state) => state.auth.user);
  const [openModal, setOpenModal] = useState(false);

  const axios = useAxiosPublic();
  const { displayName, email } = user || {};
  const { data: liveStrem = [], refetch } = useQuery({
    queryKey: ["liveStrem"],
    queryFn: async () => {
      const res = await axios.get(`/doctorlive/${email}`);
      return res.data;
    },
  });
  console.log(liveStrem);
  return (
    <div>
      <div className="mt-5">
        <div className="bg-blue-100 p-5 text-white">
          <div className=" mx-auto flex items-center justify-center">
            <button
              onClick={() => setOpenModal(true)}
              className="bg-white text-blue-500 font-semibold p-2 rounded-lg flex items-center"
            >
              <MdVideoChat className="text-xl" />
              Create Live Event
            </button>
            <div
              className={`fixed flex justify-center items-center z-[100] ${
                openModal ? "visible opacity-1" : "invisible opacity-0"
              } inset-0 backdrop-blur-sm bg-black/20 duration-100`}
            >
              <div
                className={`absolute w-[920px] p-4 text-center bg-white drop-shadow-2xl rounded-lg ${
                  openModal
                    ? "scale-1 opacity-1 duration-300"
                    : "scale-0 opacity-0 duration-150"
                }`}
              >
                <svg
                  onClick={() => setOpenModal(false)}
                  className="w-8 mx-auto mr-0 cursor-pointer"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"
                      fill="#c51636"
                    ></path>
                  </g>
                </svg>
                <DoctorLiveForm setOpenModal={setOpenModal} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-2 mt-2 m-2">
        {liveStrem?.map((dd) =>
          dd.status === "approved" ? (
            <div key={dd._id} className="bg-blue-500 w-full  rounded-md">
              <div className="p-2 text-white flex justify-between">
                <div className="flex">
                  {dd.image ? (
                    <img
                      src={dd.image}
                      className="w-28 h-28 cover-fill"
                      alt=""
                    />
                  ) : (
                    ""
                  )}
                  <div className="p-4">
                    <h1 className="text-xl">{dd.tagline}</h1>
                    <h1 className="text-xl">{dd.description}</h1>
                    <div className="flex gap-2">
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
                </div>

                <div className="  flex flex-col justify-center">
                  <Link to={`/live/${dd.liveId}/host`}>
                    <button className="flex items-center justify-center p-2 bg-white rounded-md btn text-blue-500">
                      <MdOutlineVideoChat className="text-xl" />
                      Streaming Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
};

export default DoctorLive;
