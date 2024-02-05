/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { Link, Outlet } from "react-router-dom";
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
              <div className="flex justify-center">
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
              </div>
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
                      to={"alldoctors"}
                    >
                      <FaUserDoctor />
                      <span className="ml-4">All Doctors</span>
                    </Link>
                  </li>
                  <li className="relative px-2 py-1 ">
                    <Link
                      className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600"
                      to={"alldoctors"}
                    >
                      <MdOutlineCollectionsBookmark />
                      <span className="ml-4">Appointments</span>
                    </Link>
                  </li>
                  <li className="relative px-2 py-1 ">
                    <Link
                      className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600"
                      to={"alldoctors"}
                    >
                      <LuMessagesSquare />
                      <span className="ml-4">Messages</span>
                    </Link>
                  </li>
                  <li className="relative px-2 py-1 ">
                    <Link
                      className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600"
                      to={"alldoctors"}
                    >
                      <BsPrescription />
                      <span className="ml-4">Prescription</span>
                    </Link>
                  </li>
                  <li className="relative px-2 py-1 ">
                    <Link
                      className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600"
                      to={"alldoctors"}
                    >
                      <BsFileEarmarkMedical />
                      <span className="ml-4">Medical Records</span>
                    </Link>
                  </li>
                  <li className="relative px-2 py-1 ">
                    <Link
                      className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600"
                      to={"alldoctors"}
                    >
                      <FaRegMoneyBill1 />
                      <span className="ml-4">Billing</span>
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
                      to="alldoctors"
                    >
                      <MdOutlineCollectionsBookmark />
                      <span className="ml-4">Appointments</span>
                    </Link>
                  </li>
                  <li className="relative px-2 py-1 ">
                    <Link
                      className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600"
                      to="alldoctors"
                    >
                      <LuMessagesSquare />
                      <span className="ml-4">Messages</span>
                    </Link>
                  </li>
                  <li className="relative px-2 py-1 ">
                    <Link
                      className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600"
                      to="alldoctors"
                    >
                      <BsPrescription />
                      <span className="ml-4">Prescription</span>
                    </Link>
                  </li>
                  <li className="relative px-2 py-1 ">
                    <Link
                      className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600"
                      to="alldoctors"
                    >
                      <BsFileEarmarkMedical />
                      <span className="ml-4">Medical Records</span>
                    </Link>
                  </li>
                  <li className="relative px-2 py-1 ">
                    <Link
                      className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600"
                      to="alldoctors"
                    >
                      <FaRegMoneyBill1 />
                      <span className="ml-4">Billing</span>
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
              {/* <div className="relative flex w-full flex-wrap items-stretch mb-3">
                <input
                  type="search"
                  placeholder="Search doctor's"
                  // {...$attributes}
                  className="form-input px-3 py-3 placeholder-gray-700 text-gray-700 relative bg-white rounded-lg text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10"
                />
                <span className="z-10 h-full leading-snug font-normal text-center text-gray-700 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 -mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </span>
              </div> */}
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
