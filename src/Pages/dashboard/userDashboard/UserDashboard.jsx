/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { MdLogout } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { FaUserDoctor } from "react-icons/fa6";
import { MdOutlineCollectionsBookmark } from "react-icons/md";
import { LuMessagesSquare } from "react-icons/lu";
import { BsPrescription } from "react-icons/bs";
import { BsFileEarmarkMedical } from "react-icons/bs";
import { FaRegMoneyBill1 } from "react-icons/fa6";
import { logOut } from "../../../redux/authProbiver";
const UserDashboard = ({ isSideMenuOpen, toggleSideMenu, closeSideMenu }) => {
  const user = useSelector((state) => state.auth.user);
  const { photoURL, displayName } = user || {};
  console.log(user);
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
              <div className=" flex flex-col justify-between">
                <ul className="mt-6 leading-10">
                  <li className="relative px-2 py-1 ">
                    <NavLink
                      className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600 py-2 px-4"
                      to={"home"}
                    >
                      <AiOutlineHome />
                      <span className="ml-4">Home</span>
                    </NavLink>
                  </li>
                  <li className="relative px-2 py-1 ">
                    <NavLink
                      className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600py-2 px-4"
                      to={"alldoctors"}
                    >
                      <FaUserDoctor />
                      <span className="ml-4">All Doctors</span>
                    </NavLink>
                  </li>
                  <li className="relative px-2 py-1 ">
                    <NavLink
                      className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600py-2 px-4"
                      to={"userAppointment"}
                    >
                      <MdOutlineCollectionsBookmark />
                      <span className="ml-4">Appointments</span>
                    </NavLink>
                  </li>
                  {/* <li className="relative px-2 py-1 ">
                    <NavLink
                      className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600py-2 px-4"
                      to={"alldoctors"}
                    >
                      <LuMessagesSquare />
                      <span className="ml-4">Messages</span>
                    </NavLink>
                  </li> */}
                  {/* <li className="relative px-2 py-1 ">
                    <NavLink
                      className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600py-2 px-4"
                      to={"alldoctors"}
                    >
                      <BsPrescription />
                      <span className="ml-4">Prescription</span>
                    </NavLink>
                  </li> */}
                  {/* <li className="relative px-2 py-1 ">
                    <NavLink
                      className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600py-2 px-4"
                      to={"alldoctors"}
                    >
                      <BsFileEarmarkMedical />
                      <span className="ml-4">Medical Records</span>
                    </NavLink>
                  </li> */}
                  {/* <li className="relative px-2 py-1 ">
                    <NavLink
                      className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600py-2 px-4"
                      to={"alldoctors"}
                    >
                      <FaRegMoneyBill1 />
                      <span className="ml-4">Billing</span>
                    </NavLink>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="fixed bottom-0 mb-5 bg-white">
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
                      className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600py-2 px-4"
                      to={"/dashboard"}
                    >
                      <AiOutlineHome />
                      <span className="ml-4">Home</span>
                    </NavLink>
                  </li>
                  <li className="relative px-2 py-1 ">
                    <NavLink
                      className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600py-2 px-4"
                      to="alldoctors"
                    >
                      <FaUserDoctor />
                      <span className="ml-4">All Doctors</span>
                    </NavLink>
                  </li>
                  <li className="relative px-2 py-1 ">
                    <NavLink
                      className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600py-2 px-4"
                      to="userAppointment"
                    >
                      <MdOutlineCollectionsBookmark />
                      <span className="ml-4">Appointments</span>
                    </NavLink>
                  </li>
                  {/* <li className="relative px-2 py-1 ">
                    <NavLink
                      className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600py-2 px-4"
                      to="alldoctors"
                    >
                      <LuMessagesSquare />
                      <span className="ml-4">Messages</span>
                    </NavLink>
                  </li>
                  <li className="relative px-2 py-1 ">
                    <NavLink
                      className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600py-2 px-4"
                      to="alldoctors"
                    >
                      <BsPrescription />
                      <span className="ml-4">Prescription</span>
                    </NavLink>
                  </li>
                  <li className="relative px-2 py-1 ">
                    <NavLink
                      className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600py-2 px-4"
                      to="alldoctors"
                    >
                      <BsFileEarmarkMedical />
                      <span className="ml-4">Medical Records</span>
                    </NavLink>
                  </li>
                  <li className="relative px-2 py-1 ">
                    <NavLink
                      className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600py-2 px-4"
                      to="alldoctors"
                    >
                      <FaRegMoneyBill1 />
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
      <div className="flex flex-col flex-1 w-full overflow-y-auto ">
        <header className="z-40 py-5 bg-white fixed top-0 w-[83%]">
          <div className="flex justify-between">
            <div className="flex items-center justify-between h-8 px-6">
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
            </div>
            {/* <div className=" flex justify-end mx-10">
              <div className="flex flex-col justify-center items-center ">
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
            <div className="flex mx-10">
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className=" m-1">
                  <div className="avatar">
                    <div className="w-12 rounded-full ring ring-blue-600 ring-offset-base-100 ring-offset-2">
                      <img src={photoURL} />
                    </div>
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <h1 className="text-center text-black w-full">
                      {displayName}
                    </h1>
                  </li>
                  <li>
                    <Link className="text-black w-full" to="/dashboard/home">
                      <h1 className="text-center">Update Profile</h1>
                    </Link>
                  </li>
                  <li>
                    <Link className="text-black w-full" to="/doctorRegister">
                      <h1 className="text-center">Join as a Doctor</h1>
                    </Link>
                  </li>
                  <li>
                    <button
                      className="btn btn-sm bg-transparent border-none bg-white text-start text-blue-700"
                      onClick={logOut}
                    >
                      <div className="flex justify-between gap-2">
                        <span>
                          <MdLogout />
                        </span>
                        <span>Log out</span>
                      </div>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
        <main className="mt-14 scroll-smooth">
          <Outlet></Outlet>
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;
