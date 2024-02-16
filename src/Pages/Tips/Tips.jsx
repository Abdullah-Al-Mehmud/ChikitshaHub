import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Tips = () => {
  // const [TipsData, setTipsData] = useState([]);

  // useEffect(() => {
  //   fetch("Tips.json")
  //     .then((res) => res.json())
  //     .then((data) => setTipsData(data));
  // }, []);

  // console.log(TipsData);
  const axiosPublic = useAxiosPublic();
  const { data: TipsData = [] } = useQuery({
    queryKey: ["tips"],
    queryFn: async () => {
      const res = await axiosPublic.get("/tips");
      return res.data;
    },
  });
  return (
    <div className="py-6">
      <section className="flex flex-col py-16 justify-center max-w-6xl min-h-screen px-4 lg:py-20 mx-auto sm:px-6">
        <div className="flex flex-wrap -mx-4">
          {TipsData.map((tips, idx) => (
            <div
              key={idx}
              className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
              <img
                src={tips.photoURL}
                alt="Card img"
                className="object-cover object-center w-full h-48"
              />
              <div className="flex flex-grow">
                <div className="triangle"></div>
                <div className="flex flex-col justify-between px-4 py-6 bg-white   text">
                  <div>
                    <p className="block mb-4 text-2xl font-black leading-tight ">
                      {tips.heading}
                    </p>
                    <p className="mb-4">
                      {tips.description.slice(0, 70)}........
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <Link to={`/readmores/${tips._id}`}>
                      <button className="inline-block pb-1 mt-2 text-base font-black text-[#409bd4] uppercase border-b border-transparent hover:border-blue-600">
                        Read
                        {`More -> `}
                      </button>
                    </Link>
                    <p>{/* <span>{tips.post_date}</span> */}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default Tips;
