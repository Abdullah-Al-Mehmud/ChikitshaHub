/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
const Specialties = () => {
  const dataa = useSelector((c) => c.user);
  const [specialtiesData, setSpecialtiesData] = useState([]);

  useEffect(() => {
    fetch("specialtiesData.json")
      .then((res) => res.json())
      .then((data) => setSpecialtiesData(data));
  }, []);
  return (
    <div className="">
      {/* <div className="bg-[url('https://i.ibb.co/qYS91BQ/banner2.jpg')] bg-no-repeat bg-cover">
        <div className="w-full bg-black bg-opacity-70 lg:pb-40 lg:pt-36 md:pb-28 md:pt-24 pb-20 pt-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="pt-10 text-[#ffffffea] w-full lg:text-left text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                Specialties
              </h2>
              <p className="font-medium text-white mt-1">
                Home &gt; <span className="text-[#409bd4]">Specialties</span>
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto my-12 lg:py-20">
        {specialtiesData.map((category) => (
          <Link to={`/doctors/1/${category.name}`} key={category.id}>
            <div className="px-4 ">
              <div className="border-2 rounded-xl hover:border-[#409bd4] flex flex-col md:flex-row items-center gap-6 p-6">
                <div className="bg-base-300 rounded-full w-32 h-32">
                  <img
                    className="w-24 h-24 p-4 mx-auto my-6"
                    src={category.img}
                    alt=""
                  />
                </div>
                <div className="w-2/3">
                  <h5 className="text-2xl font-semibold my-2">
                    {category.name}
                  </h5>
                  <p>{category.description}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Specialties;
