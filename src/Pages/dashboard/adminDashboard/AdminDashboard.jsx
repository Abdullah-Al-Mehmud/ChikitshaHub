/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { FaBarsStaggered, FaUserClock, FaXmark } from "react-icons/fa6";
import { MdOutlineReviews } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { MdLogout } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { FaUserDoctor } from "react-icons/fa6";
import { MdOutlineCollectionsBookmark } from "react-icons/md";
import { FaDisease } from "react-icons/fa6";
import { GrTransaction } from "react-icons/gr";
import { TbFileReport } from "react-icons/tb";
import { logOut } from "../../../redux/authProbiver";
const AdminDashboard = ({ isSideMenuOpen, toggleSideMenu, closeSideMenu }) => {
  const user = useSelector((state) => state.auth.user);
  const { photoURL, displayName } = user || {};
  return (
    <div
      className={`flex h-screen bg-white ${
        isSideMenuOpen ? "overflow-hidden" : ""
      }`}
    >
      <aside className="z-20 flex-shrink-0 hidden w-60 pl-2 overflow-y-auto bg-white md:block">
        <div>
          <div className="text-blue-950 flex flex-col justify-between">
            <div className="">
              <div className="flex p-2  bg-white">
                <div className="flex py-3 px-2 items-center">
                  <Link to={"/"}>
                    <h2 className="hidden md:block md:text-3xl text-xl font-semibold">
                      Chikitsha<span className="text-[#409bd4]">Hub</span>
                    </h2>
                  </Link>
                </div>
              </div>
              {/* <div className="flex justify-center">
                <div>
                  <img
                    className="hidden h-24 w-24 rounded-full sm:block object-cover mr-2 border-4 border-blue-400"
                    src={photoURL}
                    alt=""
                  />
                  <p className="font-bold text-base  text-gray-700 pt-2 text-center w-24">
                    {displayName}
                  </p>
                </div>
              </div> */}
              <div className=" flex flex-col justify-between">
                <ul className="mt-6 leading-10">
                  <li className="relative px-2 py-1 ">
                    <Link
                      className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600"
                      to={"/dashboard"}
                    >
                      <AiOutlineHome />
                      <span className="ml-4">Home</span>
                    </Link>
                  </li>
                  <li className="relative px-2 py-1 ">
                    <Link
                      className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600"
                      to={"adminAllDoctor"}
                    >
                      <FaUserDoctor />
                      <span className="ml-4">All Doctors</span>
                    </Link>
                  </li>
                  <li className="relative px-2 py-1 ">
                    <Link
                      className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600"
                      to={"doctorReq"}
                    >
                      <FaUserDoctor />
                      <span className="ml-4">All Doctors Request</span>
                    </Link>
                  </li>
                  <li className="relative px-2 py-1 ">
                    <Link
                      className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600"
                      to={"allpatients"}
                    >
                      <FaUserClock />
                      <span className="ml-4">All Patients</span>
                    </Link>
                  </li>
                  <li className="relative px-2 py-1 ">
                    <Link
                      className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600"
                      to={"allappointments"}
                    >
                      <MdOutlineCollectionsBookmark />
                      <span className="ml-4">All Appointments</span>
                    </Link>
                  </li>
                  <li className="relative px-2 py-1 ">
                    {/* <Link
                      className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600"
                      to={"allspecialities"}
                    >
                      <FaDisease />
                      <span className="ml-4">All Specialities</span>
                    </Link> */}
                  </li>
                  <li className="relative px-2 py-1 ">
                    {/* <Link
                      className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600"
                      to={"allreviews"}
                    >
                      <MdOutlineReviews />
                      <span className="ml-4">All Reviews</span>
                    </Link> */}
                  </li>
                  <li className="relative px-2 py-1 ">
                    {/* <Link
                      className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600"
                      to={"allreports"}
                    >
                      <TbFileReport />
                      <span className="ml-4">All Reports</span>
                    </Link> */}
                  </li>
                  <li className="relative px-2 py-1 ">
                    {/* <Link
                      className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600"
                      to={"alltransactions"}
                    >
                      <GrTransaction />
                      <span className="ml-4">All Transactions</span>
                    </Link> */}
                  </li>
                </ul>
              </div>
            </div>
            <div className="fixed bottom-0 mb-5">
              <button
                className="btn btn-sm bg-transparent border-none bg-slate-300  text-start text-blue-700"
                onClick={logOut}
              >
                <div className="flex justify-between gap-2">
                  <span>
                    <MdLogout />
                  </span>
                  <span>Log out</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </aside>
      <div className="fixed inset-0 -z-10 flex items-end bg-slate-300 bg-opacity-50 sm:items-center sm:justify-center"></div>
      <aside
        className={`fixed inset-y-0 z-20 flex-shrink-0 w-64 mt-16  ease-in-out duration-300 overflow-y-auto bg-white
        ${!isSideMenuOpen ? "-translate-x-full " : "translate-x-0"}
        
        md:hidden`}
      >
        <div className="text-blue-950">
          <div className="flex flex-col justify-between p-2 bg-white">
            <div>
              <div className="flex py-3 px-2 items-center">
                <h2 className="hidden md:block md:text-3xl text-xl font-semibold">
                  Chikitsha<span className="text-[#409bd4]">Hub</span>
                </h2>
              </div>
              <div className="flex flex-col justify-between">
                <ul className="mt-6 leading-10">
                  <li className="relative px-2 py-1 ">
                    <Link
                      className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600"
                      to={"/dashboard"}
                    >
                      <AiOutlineHome />
                      <span className="ml-4">Home</span>
                    </Link>
                  </li>
                  <li className="relative px-2 py-1 ">
                    <Link
                      className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600"
                      to="alldoctors"
                    >
                      <FaUserDoctor />
                      <span className="ml-4">All Doctors</span>
                    </Link>
                  </li>
                  <li className="relative px-2 py-1 ">
                    <Link
                      className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600"
                      to="allpatients"
                    >
                      <FaUserClock />
                      <span className="ml-4">All Patients</span>
                    </Link>
                  </li>
                  <li className="relative px-2 py-1 ">
                    <Link
                      className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600"
                      to="allappointments"
                    >
                      <MdOutlineCollectionsBookmark />
                      <span className="ml-4">All Appointments</span>
                    </Link>
                  </li>
                  <li className="relative px-2 py-1 ">
                    <Link
                      className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600"
                      to="allspecialities"
                    >
                      <FaDisease />
                      <span className="ml-4">All Specialities</span>
                    </Link>
                  </li>
                  <li className="relative px-2 py-1 ">
                    <Link
                      className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600"
                      to="allreviews"
                    >
                      <MdOutlineReviews />
                      <span className="ml-4">All Reviews</span>
                    </Link>
                  </li>
                  <li className="relative px-2 py-1 ">
                    <Link
                      className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600"
                      to="allreports"
                    >
                      <TbFileReport />
                      <span className="ml-4">All Reports</span>
                    </Link>
                  </li>
                  <li className="relative px-2 py-1 ">
                    <Link
                      className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600"
                      to="alltransactions"
                    >
                      <GrTransaction />
                      <span className="ml-4">All Transactions</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="fixed bottom-0 mb-5">
              <button
                className="btn btn-sm bg-transparent border-none bg-slate-300  text-start text-blue-700"
                onClick={logOut}
              >
                <div className="flex justify-between gap-2">
                  <span>
                    <MdLogout />
                  </span>
                  <span>Log out</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </aside>
      <div className="flex flex-col flex-1 w-full overflow-y-auto ">
        <header className="z-40 py-5 bg-white fixed w-full top-0">
          <div className="flex items-center justify-between h-8 px-6 mx-auto">
            <button
              className="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple"
              onClick={toggleSideMenu}
              aria-label="Menu"
            >
              {isSideMenuOpen ? (
                <FaXmark className="w-6 h-6" />
              ) : (
                <FaBarsStaggered className="w-6 h-6" />
              )}
            </button>
            <div className="flex justify-center mt-2 mr-4 w-[80%]"></div>
          </div>
        </header>
        <main className="mt-14 scroll-smooth bg-slate-50">
          <Outlet></Outlet>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
