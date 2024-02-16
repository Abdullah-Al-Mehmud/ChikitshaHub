/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const SpecialitiesForm = ({ handleUploadImage, handleSubmit }) => {
  return (
    <div>
      <div className="w-[90%] mx-auto">
        <p className="text-3xl font-bold leading-7 text-center text-white">
          Contact me
        </p>
        <form onSubmit={handleSubmit}>
          <div className="md:flex items-center">
            <div className="w-full md:w-1/2 flex flex-col">
              <label className="font-semibold leading-none text-gray-900">
                Image
              </label>
              <input
                type="file"
                onChange={(e) => handleUploadImage(e.target.files[0])}
                name="image"
                accept="image/*"
                required
                className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-2 border-0 bg-gray-100 rounded"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-2">
              <label className="font-semibold leading-none text-gray-900">
                Specialties
              </label>
              <input
                type="text"
                name="specialties"
                className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-2 border-0 bg-gray-100 rounded"
              />
            </div>
          </div>
          <div>
            <div className="w-full flex flex-col mt-8">
              <label className="font-semibold leading-none text-gray-900">
                Description
              </label>
              <textarea
                type="text"
                name="description"
                className="h-40 text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-2 bg-gray-100 border-0 rounded"
              ></textarea>
            </div>
          </div>
          <div className="flex items-center justify-center w-full">
            <button className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
              Add the Specialities
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SpecialitiesForm;
