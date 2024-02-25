/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useState } from "react";
import TipsCard from "./TipsCard";
import Swal from "sweetalert2";

const Tips = () => {
  const [page, setPage] = useState(1);
  const axiosPublic = useAxiosPublic();
  const { data: TipsData = [], refetch } = useQuery({
    queryKey: ["tips", page],
    queryFn: async () => {
      const res = await axiosPublic.get(`/tips?page=${page}`);
      return res.data;
    },
  });
  const allTipsData = TipsData.tip;
  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const handleNext = () => {
    if (page < totalPage) {
      setPage(page + 1);
    }
  };
  const limit = 1;
  // console.log(TipsData.totalPages);
  const totalPage = Math.ceil(TipsData.totalPages / limit);
  // console.log(totalPage);
  return (
    <div className="flex flex-col justify-between">
      <section className="flex flex-col py-16 justify-center max-w-6xl min-h-screen px-4 lg:py-20 mx-auto sm:px-6">
        <div className="grid grid-cols-2 gap-5">
          {allTipsData &&
            Array.isArray(allTipsData) &&
            allTipsData.map((tips) => (
              <TipsCard key={tips._id} data={tips}></TipsCard>
            ))}
        </div>
      </section>
      <div className="join flex gap-1 max-w-sm mx-auto text-white justify-center items-center mb-5">
        <button
          onClick={handlePrevious}
          className="bg-blue-600 px-4 py-2 text-xl rounded-full"
        >
          {"<"}
        </button>
        {Array.from({ length: totalPage }).map((_, index) => {
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
export default Tips;
