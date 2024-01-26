/* eslint-disable no-unused-vars */
import React from "react";

const TopBanner = () => {
  return (
    <div>
      <div className="bg-[url('https://i.ibb.co/qYS91BQ/banner2.jpg')] bg-no-repeat bg-cover">
        <div className="w-full bg-black bg-opacity-70 lg:pb-40 lg:pt-36 md:pb-28 md:pt-24 pb-20 pt-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="pt-10 text-[#ffffffea] w-full lg:text-left text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                Doctor Profile
              </h2>
              <p className="font-medium text-white mt-1">
                Home &gt; Specialties &gt; Doctors &gt;{" "}
                <span className="text-[#409bd4]">Doctor Profile</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
