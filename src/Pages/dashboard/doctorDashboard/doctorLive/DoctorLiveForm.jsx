/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { setHours, setMinutes } from "date-fns";
import ReactDatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";
import { imageUpload } from "../../../../api/utils";
import useRandomID from "../../../../Utils/useRandomID";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
const DoctorLiveForm = ({ setOpenModal }) => {
  const axios = useAxiosPublic();
  const user = useSelector((state) => state.auth.user);
  const { displayName, email } = user || {};
  const [uploadImageName, setUploadImageName] = useState("Upload Image");
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 16)
  );
  const [endDate, setEndDate] = useState(null);
  const { data: doctorProfileData = [] } = useQuery({
    queryKey: ["doctorProfileData"],
    queryFn: async () => {
      const res = await axios.get(`/doctors/live/${email}`);
      return res.data;
    },
  });
  const { data: doctorLive = [], refetch: timeFetch } = useQuery({
    queryKey: ["doctorLive"],
    queryFn: async () => {
      const res = await axios.get(`/doctorlive/${email}`);
      return res.data;
    },
  });
  const doctorCode = doctorProfileData[0]?.doctorCode || "none";

  const generateExcludeTimes = () => {
    const bookedTimesForCurrentDate = doctorLive.map((booking) => {
      const bookingDate = new Date(booking.dateTime);
      // console.log(bookingDate);
      return bookingDate;
    });
    if (startDate) {
      const filteredTimes = bookedTimesForCurrentDate.filter((bookingDate) => {
        timeFetch();
        return bookingDate.getTime() === startDate.getTime();
      });
      return filteredTimes;
    }
    return bookedTimesForCurrentDate;
  };

  const liveIdRandom = useRandomID();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const image = form.image.files[0];
    const tagline = form.tagline.value;
    const description = form.description.value;
    const dateTime = form.dateTime.value;
    const img_url = await imageUpload(image);
    const Data = {
      image: img_url?.data?.display_url,
      doctorName: displayName,
      doctorCode,
      doctorEmail: email,
      tagline,
      description,
      dateTime,
      liveId: liveIdRandom[0],
      status: "pending",
    };
    console.log(Data);
    try {
      const res = await axios.post("/doctorlive", Data);
      if (res.statusText === "Created") {
        // refetchTime();
        setUploadImageName("Uploaded!");
        Swal.fire({
          title: "Live Event Created!",
          text: "Your request accepted.",
          icon: "success",
        });
        setOpenModal(false);
      }
    } catch (err) {
      console.log(err);
    } finally {
      //   setLoading(false);
    }
  };

  const handleUploadImage = (image) => {
    setUploadImageName(image?.name);
  };
  return (
    <div>
      {" "}
      <div className="w-[90%] mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="w-full flex flex-col mt-8">
            <label className="font-semibold leading-none text-gray-900 text-start">
              Write Event Tagline
            </label>
            <input
              type="text"
              name="tagline"
              placeholder="Write Event Tagline"
              className=" text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-2 bg-gray-100 border-0 rounded"
            ></input>
          </div>
          <div className="lg:flex ">
            <div className="w-full md:w-1/2 flex flex-col ">
              <label className="font-semibold leading-none text-gray-900 text-start">
                Event Date and Time
              </label>
              <div className="relative">
                <ReactDatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  showTimeSelect
                  showIcon
                  toggleCalendarOnIconClick
                  isClearable
                  minDate={new Date()}
                  name="dateTime"
                  excludeTimes={generateExcludeTimes()}
                  dateFormat="MMMM d, yyyy h:mm aa"
                  className=" text-base leading-none text-gray-900 p-3 py-4 focus:outline-none focus:border-blue-700 mt-2 bg-gray-100 border-0 rounded w-[300px] ml-2"
                  icon={
                    <FaCalendarAlt className=" text-slate-900 mt-2 text-xl mr-2" />
                  }
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-2">
              <label className="font-semibold leading-none text-gray-900 text-start">
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
          </div>
          <div>
            <div className="w-full flex flex-col mt-8">
              <label className="font-semibold leading-none text-gray-900">
                Event Description
              </label>
              <textarea
                type="text"
                name="description"
                placeholder="Write Event Description"
                className="h-40 text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-2 bg-gray-100 border-0 rounded"
              ></textarea>
            </div>
          </div>
          <div className="flex items-center justify-center w-full">
            <button className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
              Send for review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DoctorLiveForm;
