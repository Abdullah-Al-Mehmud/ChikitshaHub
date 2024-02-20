/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { imageUpload } from "../../../../api/utils";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const UpdateSpecialitiesForm = ({
  dataId,
  image,
  dataName,
  dataDes,
  handleUploadImage,
  refetch,
}) => {
  const axios = useAxiosPublic();
  const [uploadImageName, setUploadImageName] = useState("Upload Image");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const image = form.image.files[0];
    const specialties = form.specialties.value;
    const description = form.description.value;
    const img_url = await imageUpload(image);
    const specialitiesUpDateData = {
      image: img_url?.data?.display_url,
      specialties,
      description,
    };
    // console.log(specialitiesUpDateData);
    try {
      const res = await axios.put(
        `/specialities/${dataId}`,
        specialitiesUpDateData
      );
      //   console.log(res);
      setUploadImageName("Uploaded!");
      //   console.log("update done");
      refetch();
    } catch (err) {
      console.log(err);
    } finally {
      //   setLoading(false);
    }
  };

  return (
    <div>
      <div className="w-[90%] mx-auto">
        <p className="text-3xl font-bold leading-7 text-center text-black">
          {" "}
          Update the Category
        </p>
        <form onSubmit={handleSubmit}>
          <div className="md:flex items-center mt-5">
            <div className="w-full md:w-1/2 flex flex-col">
              <label className="font-semibold leading-none text-gray-900">
                Image
              </label>
              <input
                type="file"
                onChange={(e) => handleUploadImage(e.target.files[0])}
                name="image"
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
                defaultValue={dataName}
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
                defaultValue={dataDes}
                className="h-40 text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-2 bg-gray-100 border-0 rounded"
              ></textarea>
            </div>
          </div>
          <div className="flex items-center justify-center w-full">
            <button className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
              Update Specialities
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateSpecialitiesForm;
