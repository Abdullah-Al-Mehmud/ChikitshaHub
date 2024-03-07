/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import useAxiosPrivet from "../../../../Hooks/useAxiosPrivet";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import moment from "moment";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import BMICalculator from "../../../../Components/BMICalculator/BMICalculator";
import Bmr from "../../../calculator/Bmr";
import BodyFat from "../../../calculator/BodyFat";
import Calorie from "../../../calculator/Calorie";

const UserHome = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openModalt, setOpenModalt] = useState(false);
  const [openModalc, setOpenModalc] = useState(false);
  const [openModalb, setOpenModalb] = useState(false);
  const axiosPrivate = useAxiosPrivet();
  const [bmiResult, setBmiResult] = useState();
  // const [bodyFitResult, setBodyFitResult] =useState("");
  const user = useSelector((state) => state.auth.user);
  const { email } = user || {};
  const url = `/bmi?email=${email}`;
  // const fitUrl = `/bodyfit?email=${email}`;
  axiosPrivate.get(url).then((res) => {
    // console.log(res.data);
    setBmiResult(res?.data);
    if (res.data.success) {
      // console.log(res.data);
      Swal.fire({
        title: "Good job!",
        text: "Your BMI is Added!",
        icon: "success",
      });
    }
  });
  // bodyFit
  const { data: bodyFitResults = [], refetch } = useQuery({
    queryKey: ["bodyFitResults"],
    queryFn: async () => {
      const res = await axiosPrivate.get(`/bodyfit/${email}`);
      return res.data;
    },
  });
  // console.log("bodyFitResults", bodyFitResults);
  // bodyCalorie
  const { data: bodyCaloriesResults = [] } = useQuery({
    queryKey: ["bodyCaloriesResults"],
    queryFn: async () => {
      const res = await axiosPrivate.get(`/calories/${email}`);
      return res.data;
    },
  });
  // console.log("bodyCaloriesResults", bodyCaloriesResults);
  // BMR
  const { data: bmrResults = [] } = useQuery({
    queryKey: ["bmrResults"],
    queryFn: async () => {
      const res = await axiosPrivate.get(`/bmr/${email}`);
      return res.data;
    },
  });
  // console.log("bmrResults", bmrResults);

  // setBodyFitResult(bodyFitResults);
  return (
    <div className="mb-16">
      <div className="lg:mt-20 mt-16 min-h-screen">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 w-[90%] rounded-lg mx-auto gap-5 ">
          <div className="overflow-hidden w-full py-6 sm:py-12 rounded-lg">
            <div>
              <button onClick={() => setOpenModal(true)} className="w-full">
                <div>
                  <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                    <span className="absolute top-10 z-0 h-20 w-20 lg:left-10 left-7  rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
                    <div className="relative z-10 mx-auto max-w-md">
                      <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-white">
                        <img
                          className="text-center h-14 w-14"
                          src="https://i.ibb.co/0MVztd0/graph-01.png"
                          alt=""
                        />
                      </span>
                      <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                        <p className="text-xl font-bold text-left">
                          BMI Status
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
              <div
                onClick={() => setOpenModal(false)}
                className={`fixed flex justify-center items-center z-[100] ${openModal ? "visible opacity-1" : "invisible opacity-0"
                  } inset-0 w-full h-full backdrop-blur-sm bg-black/20 duration-100`}
              >
                <div
                  onClick={(e_) => e_.stopPropagation()}
                  className={`absolute max-w-md p-4 text-center bg-white drop-shadow-2xl rounded-lg ${openModal
                    ? "scale-1 opacity-1 duration-300"
                    : "scale-0 opacity-0 duration-150"
                    }`}
                >
                  <h1 className="p-2 text-3xl font-semibold">BMI Status</h1>
                  {/* bmiResult */}
                  <div>
                    {Array.isArray(bmiResult) &&
                      bmiResult?.map((result, index) => (
                        <div key={result._id}>
                          <h1>
                            {moment().format("MMM Do YY")} : BMI result :
                            {result?.bmiResult}{" "}
                          </h1>
                        </div>
                      ))}
                    <div>
                      <div>
                        {/* {bodyFitResults?.map((result, index) => (
                          <div key={result._id}>
                            <h1>
                              {moment().format("MMM Do YY")} : BMI result :{" "}
                              {result?.bmiResult}{" "}
                            </h1>
                          </div>
                        ))} */}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setOpenModal(false)}
                    className="text-white me-2 bg-[#16c55c] px-6 py-2 rounded-full"
                  >
                    Ok
                  </button>
                  <button
                    onClick={() => setOpenModal(false)}
                    className="text-[#c51636] hover:text-white hover:bg-[#c51636] px-6 py-2 border border-[#c51636] rounded-full"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* 2nd card */}

          <div className="overflow-hidden w-full py-6 sm:py-12 rounded-lg">
            <div>
              <button onClick={() => setOpenModalt(true)} className="w-full">
                <div>
                  <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                    <span className="absolute top-10 z-0 h-20 w-20 lg:left-10 left-7 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
                    <div className="relative z-10 mx-auto max-w-md">
                      <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-white">
                        <img
                          className="text-center h-14 w-14"
                          src="https://i.ibb.co/16VsTnk/graph-02.png"
                          alt=""
                        />
                      </span>
                      <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                        <p className="text-xl whitespace-nowrap font-bold text-left">
                          BodyFat Status
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
              <div
                onClick={() => setOpenModalt(false)}
                className={`fixed flex justify-center items-center z-[100] ${openModalt ? "visible opacity-1" : "invisible opacity-0"
                  } inset-0 w-full h-full backdrop-blur-sm bg-black/20 duration-100`}
              >
                <div
                  onClick={(e_) => e_.stopPropagation()}
                  className={`absolute max-w-md p-4 text-center bg-white drop-shadow-2xl rounded-lg ${openModalt
                    ? "scale-1 opacity-1 duration-300"
                    : "scale-0 opacity-0 duration-150"
                    }`}
                >
                  <h1 className="p-2 text-3xl font-semibold">Body Fat</h1>
                  {/* bmiResult */}
                  <div>
                    {bodyFitResults?.map((dd) => (
                      <div key={dd?._id}>
                        <h1>
                          {moment().format("MMM Do YY")} : Body Fat result :
                          {dd?.result}{" "}
                        </h1>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => setOpenModalt(false)}
                    className="text-white me-2 bg-[#16c55c] px-6 py-2 rounded-full"
                  >
                    Ok
                  </button>
                  <button
                    onClick={() => setOpenModalt(false)}
                    className="text-[#c51636] hover:text-white hover:bg-[#c51636] px-6 py-2 border border-[#c51636] rounded-full"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 2nd card end */}

          {/* 3rd card */}

          <div className="overflow-hidden w-full py-6 sm:py-12 rounded-lg">
            <div>
              <button onClick={() => setOpenModalc(true)} className="w-full">
                <div>
                  <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                    <span className="absolute top-10 z-0 h-20 w-20 lg:left-10 left-7 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
                    <div className="relative z-10 mx-auto max-w-md">
                      <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-white">
                        <img
                          className="text-center h-14 w-14"
                          src="https://i.ibb.co/120WsFn/graph-03.png"
                          alt=""
                        />
                      </span>
                      <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                        <p className="text-xl whitespace-nowrap font-bold text-left">
                          Calories Status
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
              <div
                onClick={() => setOpenModalc(false)}
                className={`fixed flex justify-center items-center z-[100] ${openModalc ? "visible opacity-1" : "invisible opacity-0"
                  } inset-0 w-full h-full backdrop-blur-sm bg-black/20 duration-100`}
              >
                <div
                  onClick={(e_) => e_.stopPropagation()}
                  className={`absolute max-w-md p-4 text-center bg-white drop-shadow-2xl rounded-lg ${openModalc
                    ? "scale-1 opacity-1 duration-300"
                    : "scale-0 opacity-0 duration-150"
                    }`}
                >
                  <h1 className="p-2 text-3xl font-semibold">Calories Status</h1>
                  {/* bmiResult */}
                  <div>
                    {bodyCaloriesResults?.map((dd) => (
                      <div key={dd._id}>
                        <h1>
                          {moment().format("MMM Do YY")} : Calories result :
                          {dd.calories}{" "}
                        </h1>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => setOpenModalc(false)}
                    className="text-white me-2 bg-[#16c55c] px-6 py-2 rounded-full"
                  >
                    Ok
                  </button>
                  <button
                    onClick={() => setOpenModalc(false)}
                    className="text-[#c51636] hover:text-white hover:bg-[#c51636] px-6 py-2 border border-[#c51636] rounded-full"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 3rd card end */}
          {/* 4rth cart */}
          <div className="overflow-hidden w-full py-6 sm:py-12 rounded-lg">
            <div>
              <button onClick={() => setOpenModalb(true)} className="w-full">
                <div>
                  <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                    <span className="absolute top-10 z-0 h-20 w-20 lg:left-10 left-7 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
                    <div className="relative z-10 mx-auto max-w-md">
                      <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-white">
                        <img
                          className="text-center h-14 w-14"
                          src="https://i.ibb.co/yYrN464/graph-04.png"
                          alt=""
                        />
                      </span>
                      <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                        <p className="text-xl whitespace-nowrap font-bold text-left">
                          BMR Status
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
              <div
                onClick={() => setOpenModalb(false)}
                className={`fixed flex justify-center items-center z-[100] ${openModalb ? "visible opacity-1" : "invisible opacity-0"
                  } inset-0 w-full h-full backdrop-blur-sm bg-black/20 duration-100`}
              >
                <div
                  onClick={(e_) => e_.stopPropagation()}
                  className={`absolute max-w-md p-4 text-center bg-white drop-shadow-2xl rounded-lg ${openModalb
                    ? "scale-1 opacity-1 duration-300"
                    : "scale-0 opacity-0 duration-150"
                    }`}
                >
                  <h1 className="p-2 text-3xl font-semibold">BMR Status</h1>
                  {/* bmiResult */}
                  <div>
                    {Array.isArray(bmrResults) &&
                      bmrResults?.map((result, index) => (
                        <div key={result._id}>
                          <h1>
                            {moment().format("MMM Do YY")} : BMR result :
                            {result?.bmr}{" "}
                          </h1>
                        </div>
                      ))}
                    </div>
                  <button
                    onClick={() => setOpenModalb(false)}
                    className="text-white me-2 bg-[#16c55c] px-6 py-2 rounded-full"
                  >
                    Ok
                  </button>
                  <button
                    onClick={() => setOpenModalb(false)}
                    className="text-[#c51636] hover:text-white hover:bg-[#c51636] px-6 py-2 border border-[#c51636] rounded-full"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* 4rth cart */}
          {/* <div className="overflow-hidden w-full   py-6 sm:py-12">
              <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
                <div className="relative z-10 mx-auto max-w-md">
                  <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-white">
                    <img
                      className="text-center "
                      src="https://i.ibb.co/yYrN464/graph-04.png"
                      alt=""
                    />
                  </span>
                  <div className=" pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                    <p className="text-xl font-bold whitespace-nowrap">
                      Weight Status
                    </p>
                  </div>
                  <div className="pt-5 text-sm leading-7">
                    <p>
                      <a
                        href="#"
                        className="text-sky-500 transition-all duration-300 group-hover:text-white"
                      >
                        Last Update 5d
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
        </div>
        <div className="">
        <div className="flex flex-col lg:flex-row items-start justify-center mb-6">
          <BMICalculator />
          <BodyFat />
          </div>
          <div className="flex flex-col lg:flex-row items-start justify-center">
          <Calorie />
          <Bmr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
