/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const AllDoctors = () => {
  const user = useSelector((state) => state.auth.user);
  const axios = useAxiosPublic();
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [doctors, setDoctors] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [totalDoctors, setTotalDoctors] = useState(0);
  const [loading, setLoading] = useState(true);
  const defaultImg = "https://i.ibb.co/FBdRkGZ/doctor-9722572.png";
  const handleOnClick = () => {
    setPage(1);
    const combinedSearchTerm =
      `${searchTerm} ${location} ${specialties}`.trim();
    setSearchTerm(combinedSearchTerm);
  };
  useEffect(() => {
    async function fetchDoctors() {
      try {
        setLoading(true);
        const response = await axios.get("/doctors/search", {
          params: {
            page,
            limit,
            searchTerm: searchTerm,
          },
        });
        setDoctors(response?.data?.data);
        setTotalPages(response?.data?.totalPages);
        setTotalDoctors(response?.data?.totalDoctors);
        setLoading(false);
      } catch (error) {
        console.error("Error while fetching doctors:", error);
        setLoading(false);
      }
    }
    fetchDoctors();
  }, [axios, page, searchTerm, location, limit]);
  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const handleNext = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };
  // console.log(doctors);
  return (
    <div>
      <div className="fixed top-2 ml-5 z-50 mx-auto ">
        <div className="relative flex flex-wrap items-stretch mb-3 mt-2">
          <input
            type="search"
            placeholder="Search doctor's"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onClick={(e) => handleOnClick(e)}
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
        </div>
      </div>
      {loading && (
        <div className="flex justify-center items-center h-screen">
          <span className="loading loading-dots loading-lg "></span>
        </div>
      )}
      {!loading && (
        <div className="z-40 mt-20 px-5">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-5 md:gap-3 gap-2 ">
            {doctors?.map((doctor) => (
              <Link to={`/doctors/${doctor?._id}`} key={doctor?._id}>
                <div className=" p-6 border rounded-lg mb-6 shadow-xl hover:border-[#409bd4] hover:shadow-2xl h-[230px] bg-white">
                  <div className="flex items-center gap-2 flex-row">
                    <div>
                      <div className="flex items-center gap-6">
                        <div className="avatar">
                          <div className="w-20 rounded-xl">
                            {doctor.img ? (
                              <img src={doctor?.img} />
                            ) : (
                              <span>
                                <img src={defaultImg} alt="" />
                              </span>
                            )}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold">
                            {doctor?.name}
                          </h4>
                          <p className="text-sm font-semibold text-gray-600">
                            {doctor?.specialties}
                          </p>
                        </div>
                      </div>
                      <div className="mt-2">
                        {/* <h4 className="text-sm font-medium text-gray-600">
                          Working on:{" "}
                          <span className="text-sm font-medium text-black">
                            {doctor?.location}
                          </span>
                        </h4> */}
                        {/* <div className="flex md: flex-col lg:flex-row lg:items-center gap-4 mt-2">
                        <h4 className="text-lg font-medium text-gray-600">
                          Experience:{" "}
                          <span className="text-lg font-semibold text-black">
                            {doctor?.experience?.year} + Years
                          </span>
                        </h4>
                      </div> */}
                        <div className="flex gap-1 items-center">
                          <h4 className="text-sm font-medium text-gray-600 flex items-center gap-2">
                            Rating:{" "}
                            <Rating
                              initialRating={doctor?.rating}
                              emptySymbol={
                                <AiOutlineStar className="text-orange-300 w-5 h-5 mt-2" />
                              }
                              fullSymbol={
                                <AiFillStar className="text-orange-300 w-5 h-5 mt-2" />
                              }
                            ></Rating>
                          </h4>
                          <p className="text-sm font-medium text-gray-600">
                            ({doctor?.rating})
                          </p>
                        </div>
                        <div className="flex flex-col">
                          <h4 className="text-2xl font-bold">
                            $ {doctor?.fee}{" "}
                            <span className="text-sm font-normal text-gray-600">
                              per consultation
                            </span>
                          </h4>
                          <p className="text-sm font-normal text-gray-600 mt-2">
                            Follow Up: $ {doctor?.followUpFee}
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* <div className="bg-base-200 px-10 py-16 text-center w-full rounded-lg md:w-fit">
                    <h4 className="text-2xl font-bold">
                      $ {doctor?.fee}{" "}
                      <span className="text-sm font-normal text-gray-600">
                        per <br /> consultation
                      </span>
                    </h4>
                    <p className="text-sm font-normal text-gray-600 mt-4">
                      Follow Up: $ {doctor?.followUpFee}
                    </p>
                  </div> */}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
      <div className="join flex gap-1 max-w-sm mx-auto text-white justify-center items-center mb-5">
        <button
          onClick={handlePrevious}
          className="bg-blue-600 px-4 py-2 text-xl rounded-full"
        >
          {"<"}
        </button>
        {/* {Array.from({ length: totalPage }).map((_, index) => {
          const pageNumber = index + 1;
          return (
            <button
              key={pageNumber}
              onClick={() => setPage(pageNumber)}
              className={`${
                pageNumber === page
                  ? "bg-blue-700 px-5 py-2 text-xl text-white rounded-full"
                  : " bg-indigo-100 px-5 py-2 text-xl text-blue-950 rounded-full"
              }`}
            >
              {pageNumber}
            </button>
          );
        })} */}
        {Array.from({ length: totalPages }).map((_, index) => {
          const pageNumber = index + 1;
          return (
            <button
              key={pageNumber}
              onClick={() => setPage(pageNumber)}
              className={`${
                pageNumber === page
                  ? "bg-blue-700 px-5 py-2 text-xl text-white rounded-full"
                  : " bg-indigo-100 px-5 py-2 text-xl text-blue-950 rounded-full"
              }`}
            >
              {pageNumber}
            </button>
          );
        })}

        <button
          onClick={handleNext}
          className="bg-blue-600 px-4 py-2 text-xl rounded-full"
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default AllDoctors;
