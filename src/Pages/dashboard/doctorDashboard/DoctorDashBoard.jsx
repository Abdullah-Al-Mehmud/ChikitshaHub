/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { NavLink, Outlet, Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { MdLogout } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { FaUserDoctor } from "react-icons/fa6";
import { MdOutlineCollectionsBookmark } from "react-icons/md";
import { FaFilePrescription } from "react-icons/fa";
import { GiVideoConference } from "react-icons/gi";
import { AiOutlineSchedule } from "react-icons/ai";
import { FaUserClock } from "react-icons/fa6";
import { LuMessagesSquare } from "react-icons/lu";
import { BsPrescription } from "react-icons/bs";
import { BsFileEarmarkMedical } from "react-icons/bs";
import { FaRegMoneyBill1 } from "react-icons/fa6";
import { logOut } from "../../../redux/authProbiver";
const DoctorDashBoard = ({ isSideMenuOpen, toggleSideMenu, closeSideMenu }) => {
  const user = useSelector((state) => state.auth.user);
  const location = useLocation();
  const { photoURL, displayName, email } = user || {};
  const getHeadingFromPath = (pathname) => {
    const parts = pathname.split("/");
    const lastPart = parts[parts.length - 1];
    switch (lastPart) {
      case "home":
        return "Home";
      case "timeScedule":
        return "Schedule Timings";
      case "prescrption":
        return "Prescription";
      case "doctorlive":
        return "Go Live";
      case "update":
        return "Edit Your Profile";
      default:
        return "ChikitshaHub";
    }
  };

  const currentHeading = getHeadingFromPath(location.pathname);
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
                  <NavLink to={"/"}>
                    <h2 className="hidden md:block md:text-3xl text-xl font-semibold">
                      Chikitsha<span className="text-[#409bd4]">Hub</span>
                    </h2>
                  </NavLink>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="flex flex-col gap-2 justify-center items-center">
                  <img
                    className="hidden h-14 w-14 rounded-full sm:block object-cover mx-auto"
                    src={photoURL}
                    alt=""
                  />
                  <p className="font-bold text-base  text-gray-700 pt-2 text-center w-auto">
                    {displayName}
                  </p>
                  <Link to="doctorMyProfile">
                    <button className="btn btn-sm">View Profile</button>
                  </Link>
                </div>
              </div>
              <div className=" flex flex-col justify-between">
                <ul className="mt-2 leading-10">
                  <li className="relative px-2 py-1 ">
                    <NavLink
                      className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600 py-2 px-4"
                      to={"home"}
                    >
                      <AiOutlineHome className="text-lg" />
                      <span className="ml-4">Home</span>
                    </NavLink>
                  </li>
                  {/* <li className="relative px-2 py-1 ">
                    <NavLink
                      className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600 py-2 px-4"
                      to={""}
                    >
                      <FaUserClock className="text-lg" />
                      <span className="ml-4">My Patients</span>
                    </NavLink>
                  </li> */}
                  <li className="relative px-2 py-1 ">
                    <NavLink
                      className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600 py-2 px-4"
                      to={"doctorlive"}
                    >
                      <GiVideoConference className="text-lg" />
                      <span className="ml-4">Go Live</span>
                    </NavLink>
                  </li>
                  <li className="relative px-2 py-1 ">
                    <NavLink
                      className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600 py-2 px-4"
                      to={"timeScedule"}
                    >
                      <AiOutlineSchedule className="text-lg" />
                      <span className="ml-4">Schedule Timings</span>
                    </NavLink>
                  </li>
                  <li className="relative px-2 py-1 ">
                    <NavLink
                      className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600 py-2 px-4"
                      to={"prescrption"}
                    >
                      <FaFilePrescription className="text-lg" />
                      <span className="ml-4">Prescription</span>
                    </NavLink>
                  </li>

                  {/* <li className="relative px-2 py-1 ">
                    <NavLink
                      className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600 py-2 px-4"
                      to={"alldoctors"}
                    >
                      <LuMessagesSquare className="text-lg" />
                      <span className="ml-4">Messages</span>
                    </NavLink>
                  </li> */}
                  {/* <li className="relative px-2 py-1 ">
                    <NavLink
                      className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600 py-2 px-4"
                      to={"alldoctors"}
                    >
                      <BsPrescription className="text-lg" />
                      <span className="ml-4">Prescription</span>
                    </NavLink>
                  </li> */}
                  {/* <li className="relative px-2 py-1 ">
                    <NavLink
                      className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600 py-2 px-4"
                      to={"alldoctors"}
                    >
                      <BsFileEarmarkMedical className="text-lg" />
                      <span className="ml-4">Medical Records</span>
                    </NavLink>
                  </li> */}
                  {/* <li className="relative px-2 py-1 ">
                    <NavLink
                      className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600 py-2 px-4"
                      to={"alldoctors"}
                    >
                      <FaRegMoneyBill1 className="text-lg" />
                      <span className="ml-4">Billing</span>
                    </NavLink>
                  </li> */}
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
                    <NavLink
                      className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600 py-2 px-4"
                      to={"home"}
                    >
                      <AiOutlineHome className="text-lg" />
                      <span className="ml-4">Home</span>
                    </NavLink>
                  </li>
                  <li className="relative px-2 py-1 ">
                    <NavLink
                      className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600 py-2 px-4"
                      to="timeScedule"
                    >
                      <FaUserClock className="text-lg" />
                      <span className="ml-4">My Patients</span>
                    </NavLink>
                  </li>
                  <li className="relative px-2 py-1 ">
                    <NavLink
                      className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600 py-2 px-4"
                      to="prescrption"
                    >
                      <AiOutlineSchedule className="text-lg" />
                      <span className="ml-4">Schedule Timings</span>
                    </NavLink>
                  </li>
                  <li className="relative px-2 py-1 ">
                    <NavLink
                      className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600 py-2 px-4"
                      to="doctorlive"
                    >
                      <GiVideoConference className="text-lg" />
                      <span className="ml-4">Go Live</span>
                    </NavLink>
                  </li>

                  {/* <li className="relative px-2 py-1 ">
                    <NavLink
                      className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600 py-2 px-4"
                      to="alldoctors"
                    >
                      <LuMessagesSquare className="text-lg" />
                      <span className="ml-4">Messages</span>
                    </NavLink>
                  </li>
                  <li className="relative px-2 py-1 ">
                    <NavLink
                      className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600 py-2 px-4"
                      to="alldoctors"
                    >
                      <BsPrescription className="text-lg" />
                      <span className="ml-4">Prescription</span>
                    </NavLink>
                  </li>
                  <li className="relative px-2 py-1 ">
                    <NavLink
                      className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600 py-2 px-4"
                      to="alldoctors"
                    >
                      <BsFileEarmarkMedical className="text-lg" />
                      <span className="ml-4">Medical Records</span>
                    </NavLink>
                  </li>
                  <li className="relative px-2 py-1 ">
                    <NavLink
                      className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600 py-2 px-4"
                      to="alldoctors"
                    >
                      <FaRegMoneyBill1 className="text-lg" />
                      <span className="ml-4">Billing</span>
                    </NavLink>
                  </li> */}
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
      <div className="flex flex-col flex-1 justify-between w-full overflow-y-auto ">
        <header className="z-40 py-5 bg-slate-50 fixed w-full top-0">
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
            <div className="flex justify-center mt-2 mr-4 w-[80%]">
              <h1 className="text-xl text-[#409bd4]">{currentHeading}</h1>
            </div>
          </div>

          <div>
            {/* <div className="flex justify-center">
              <div className="flex  flex-col justify-center items-center">
                <img
                  className="hidden h-12 w-12 rounded-full sm:block object-cover mr-2 border-2 border-blue-400"
                  src={photoURL}
                  alt=""
                />
                <p className="font-semibold text-base  text-gray-700 pt-2 text-center w-full">
                  {displayName}
                </p>
              </div>
            </div> */}
          </div>
        </header>
        <main className="mt-14 scroll-smooth">
          <Outlet></Outlet>
        </main>
      </div>
    </div>
  );
};

export default DoctorDashBoard;
