/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Swal from "sweetalert2";
import { imageUpload } from "../../api/utils";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const UpdateEmailjs = ({ dataDes, dataId, dataImg, dataHeader, refetch }) => {
  const axiosPublic = useAxiosPublic();
  const [uploadImageName, setUploadImageName] = useState("Upload Image");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const heading = data.heading;
    const photoURL = data?.image?.[0];
    const description = data.description;
    const img_url = await imageUpload(photoURL);
    const TipsInfo = {
      heading,
      photoURL: img_url?.data?.display_url,
      // photoURL,
      description,
    };
    // console.log(TipsInfo);

    axiosPublic.put(`/tips/all/${dataId}`, TipsInfo).then((res) => {
      //   console.log(res);
      if (res.status === 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Tips added Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    });
    axiosPublic.put(`/tips/all/${dataId}`, TipsInfo).then((res) => {
      // console.log(res.data);
    });
  };
  const handleUploadImage = (image) => {
    setUploadImageName(image?.name);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-full mx-auto flex w-full flex-col border rounded-lg bg-white p-8"
      >
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-3">
          <div className="mb-1">
            <label className="text-sm leading-7 text-gray-600">Heading</label>
            <input
              {...register("heading", {
                required: "input field is required",
              })}
              type="text"
              id="heading"
              name="heading"
              defaultValue={dataHeader}
              className="w-full rounded border border-gray-300 bg-white py-2 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
            <p className="text-red-500 py-2 font-bold">
              {errors.heading?.message}
            </p>
          </div>
          <div className="mb-1">
            <label className="text-sm leading-7 text-gray-600">Photo URL</label>
            <input
              {...register("image", {
                required: "input field is required",
              })}
              type="file"
              // onChange={(e) => handleUploadImage(e.target.files)}
              // id="image"
              name="image"
              className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
            <p className="text-red-500 py-2 font-bold">
              {errors.image?.message}
            </p>
          </div>
        </div>
        <div className="mb-1">
          <label className="text-sm leading-7 text-gray-600">Description</label>
          <textarea
            {...register("description", {
              required: "input field is required",
            })}
            id="description"
            name="description"
            defaultValue={dataDes}
            className="h-28 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          ></textarea>
          <p className="text-red-500 py-2 font-bold">
            {errors.description?.message}
          </p>
        </div>
        <button
          type="submit"
          className="rounded border-0 bg-indigo-500 py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none"
        >
          Send
        </button>
        <p className="mt-2 text-xs text-gray-500">{`Send All tips update for user's`}</p>
      </form>
    </div>
  );
};

export default UpdateEmailjs;
