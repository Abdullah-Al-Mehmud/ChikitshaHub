/* eslint-disable no-unused-vars */
import React from "react";
import { RiVideoFill } from "react-icons/ri";
const JoinButton = ({ btnName }) => {
  return (
    <div>
      <button className="text-xl mr-6  px-16 h-10 mx-1 text-white rounded-md duration-300  bg-sky-700 overflow-hidden relative z-10 group">
        <span className="bg-sky-500 group-hover:shadow-md w-28 h-28 rounded-full absolute top-2 left-2 -z-10"></span>
        <span className="bg-sky-400 group-hover:shadow-md  w-20 h-20 rounded-full absolute top-6 left-6 -z-10"></span>
        <span className="bg-sky-300group-hover:shadow-md  delay-100 w-12 h-12 rounded-full absolute top-10 left-10 -z-10"></span>
        <span className=" rounded-full absolute inset-0 flex justify-center items-center -z-10 font-semibold text-white">
          {btnName} <RiVideoFill />
        </span>
      </button>
    </div>
  );
};

export default JoinButton;
