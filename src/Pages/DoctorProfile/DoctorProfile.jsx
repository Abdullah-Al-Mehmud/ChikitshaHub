/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { FaCalendarAlt, FaVideo } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useForm } from "react-hook-form";
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaArrowRightLong } from "react-icons/fa6";
import "react-datepicker/dist/react-datepicker.css";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Payment from "../Payment/Payment";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import ReactDatePicker from "react-datepicker";

const DoctorProfile = () => {
  const [appointmentTime, setAppointmentTime] = useState("");
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  // const [meet, setMeet] = useState("");
  const doctor = useLoaderData();
  const navigate = useNavigate();
  // console.log(appointmentTime);
  const axios = useAxiosPublic();

  const handleDateTimeChange = (date) => {
    setSelectedDateTime(date);
  };

  const user = useSelector((state) => state.auth.user);
  const { displayName, email } = user || {};

  const { data: reviews = [], refetch } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axios.get(`/doctorReview/${doctor.doctorEmail}`);
      return res.data;
    },
  });

  // console.log(reviews);

  const dateObject = new Date(doctor?.joiningDate);
  const formattedDate = dateObject.toLocaleDateString();
  doctor.joiningDate = formattedDate;

  const dateObjectStart = new Date(doctor.experience.start);
  const formattedDateStart = dateObjectStart.toLocaleDateString();
  doctor.experience.start = formattedDateStart;

  if (doctor.experience.end === "present") {
    doctor.experience.end = "present";
  } else {
    const dateObjectEnd = new Date(doctor.experience.end);
    const formattedDateEnd = dateObjectEnd.toLocaleDateString();
    doctor.experience.end = formattedDateEnd;
  }

  const { register, handleSubmit } = useForm();
  
  const onSubmit = async (data) => {
    const { name, comment, rating } = data;
    const reviewData = {
      name,
      comment,
      rating,
      doctorEmail: doctor.doctorEmail,
    };
  
    try {
      const postResponse = await axios.post("/doctorReview", reviewData);
      if (postResponse.data.success) {
        Swal.fire({
          title: "Good job!",
          text: "Your Review send Successfully.",
          icon: "success",
        });
  
        // Refetch reviews data and wait for it to complete
        await refetch();
  
        // Access the updated reviews data after refetching
        const { data: updatedReviews } = await refetch();
  
        // Calculate average rating from the updated reviews data
        const averageRating = updatedReviews.reduce((total, review) => total + review.rating, 0) / updatedReviews.length;
        const fixedAverageRating = averageRating.toFixed(1);
  
        // Update doctor's post with the new average rating
        const patchResponse = await axios.patch(`/doctors/${doctor.doctorEmail}`, { fixedAverageRating });
        console.log(patchResponse.data); // Log the response from the patch request
      } else {
        console.error(postResponse.error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // const handleMeetId = () => {
  //   navigate(`/meet/${meet}`);
  // };

  const handleAppointment = (e) => {
    e.preventDefault();
    setAppointmentTime(selectedDateTime);
  };

  const handleDeleteReview = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`/doctorReview/${id}`).then(async (res) => {
            console.log(res);
          if (res.statusText === "OK") {
            Swal.fire({
              title: "Deleted!",
              text: "Your review has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      } else if (result.dismiss === "cancel") {
        Swal.fire({
          title: "Cancelled",
          text: "Your user is safe!",
          icon: "info",
        });
      }
    });
  };

  return (
    <div>
      <div className="max-w-6xl mx-auto  px-6 mt-16 lg:py-20">
        <div className="flex flex-col  md:flex-row gap-6 items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="w-60 rounded-xl">
              <img src={doctor.img} />
            </div>
            <div>
              <h4 className="text-xl font-semibold">
                {doctor.name}{" "}
                <span className="text-sm font-semibold text-gray-600">
                  ({doctor.degrees[0]}, {doctor.degrees[1]})
                </span>
              </h4>
              <p className="text-sm font-semibold text-gray-600 my-2">
                {doctor.specialties}
              </p>
              {/* <p className="text-sm font-medium text-gray-600 flex gap-2">
                {doctor.specializations[0]}, {doctor.specializations[1]}
              </p> */}
              <h4 className="text-lg font-medium text-gray-600 mt-2">
                Working at{" "}
                <span className="text-lg font-semibold text-black">
                  {doctor.location}
                </span>
              </h4>
            </div>
          </div>
          <div className="text-center">
            <h4 className="text-xl font-bold">Consultation Fee</h4>
            <h3 className="text-2xl font-bold text-[#409bd4] my-2">
              $ {doctor.fee}{" "}
              <span className="text-sm font-bold text-gray-600">
                (incl. VAT)
              </span>
            </h3>
            {/* <button
              onClick={() => document.getElementById("my_modal_3").showModal()}
              // onClick={handleMeetId}
              className="flex items-center relative w-52 mx-auto border-2 border-green-800 text-green-800 px-4 py-2 rounded-full group mt-4 text-lg font-semibold mb-4"
            >
              <span>See Doctor Now</span>
              <span className="absolute w-1/6 right-3 group-hover:w-11/12 box-content duration-300 flex justify-center bg-white rounded-full">
                <FaVideo className="h-10" />
              </span>
            </button>
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <input
                  onChange={(e) => setMeet(e.target.value)}
                  type="text"
                  name="meetId"
                  id=""
                  placeholder="Enter your meet id"
                  className="input input-bordered border-green-800 text-green-800 focus:outline-none focus:border-green-800"
                />
                <button
                  type="submit"
                  onClick={handleMeetId}
                  className="flex items-center relative w-24 mx-auto border-2 border-green-800 text-green-800 px-4 py-2 rounded-full group mt-4 text-lg font-semibold"
                >
                  <span>Join</span>
                  <span className="absolute w-1/6 right-3 group-hover:w-5/6 box-content duration-300 flex justify-center bg-white rounded-full">
                    <FaVideo className="h-10" />
                  </span>
                </button>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog> */}

            <form className="flex gap-2 " onSubmit={handleAppointment}>
              <div className="relative">
                <ReactDatePicker
                  selected={selectedDateTime}
                  onChange={handleDateTimeChange}
                  showIcon
                  toggleCalendarOnIconClick
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  timeCaption="Time"
                  dateFormat="MMMM d, yyyy h:mm aa"
                  name="appointment"
                  placeholderText="Booking Appointment"
                  className="border-2 border-[#409bd4] text-[#409bd4] px-4 py-1 rounded-full group text-lg font-semibold focus:outline-none flex flex-row"
                  icon={
                    <FaCalendarAlt className=" text-[#409bd4] mt-1 text-base" />
                  }
                ></ReactDatePicker>
              </div>
              {selectedDateTime ? (
                <>
                  <button
                    onClick={() =>
                      document.getElementById("my_modal_2").showModal()
                    }
                    type="submit"
                    className=" bg-white border-2 border-[#409bd4] text-[#409bd4] px-4 py-1 rounded-full  right-2 top-0 group text-lg font-semibold hover:bg-[#409bd4] hover:text-white"
                  >
                    Pay
                  </button>
                </>
              ) : (
                ""
              )}
            </form>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_2" className="modal">
              <div className="modal-box">
                <Payment
                  doctorName={doctor?.name}
                  doctorCode={doctor?.doctorCode}
                  doctorEmail={doctor?.doctorEmail}
                  patientName={displayName}
                  patientEmail={email}
                  appointmentTime={appointmentTime}
                  fee={doctor?.fee}
                ></Payment>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6 my-10">
          <h4 className="text-xl font-normal text-gray-600">
            Total Experience <br />{" "}
            <span className="text-black font-semibold">
              {doctor.experience.year} + Years
            </span>
          </h4>
          <h4 className="text-xl font-normal text-gray-600">
            BMDC Number <br />{" "}
            <span className="text-black font-semibold">
              {doctor.bmdcNumber}
            </span>
          </h4>
          <h4 className="text-xl font-normal text-gray-600">
            Joined ChikitshaHub <br />{" "}
            <span className="text-black font-semibold">
              {doctor.joiningDate}
            </span>
          </h4>
        </div>

        <Tabs>
          <TabList>
            <Tab>Info</Tab>
            <Tab>Experience</Tab>
            <Tab>Review</Tab>
          </TabList>

          <TabPanel>
            <div className="flex flex-col md:flex-row gap-10 my-8">
              <div className="md:w-1/2">
                <h2 className="text-xl font-bold">About {doctor.name}</h2>
                <p className="mt-2 font-medium text-gray-600">
                  {doctor.aboutDoctor}
                </p>
              </div>
              <div className="md:w-1/2">
                <div>
                  <h4 className="text-xl font-bold mb-2">Availability</h4>
                  <div className="border-l-4 p-2 border-l-[#409bd4]">
                    <h6 className="text-lg font-medium text-gray-600">
                      Instant Consultation Time
                    </h6>
                    <h4 className="text-lg flex font-bold">
                      {doctor.availability?.map((avail, index) => (
                        <React.Fragment key={index}>
                          <p className="">{avail}</p>
                          {index < doctor.availability.length - 1 && (
                            <span>, </span>
                          )}
                        </React.Fragment>
                      ))}
                    </h4>
                  </div>
                </div>
                <div className="my-6">
                  <h4 className="text-xl font-bold mb-2">At a Glance</h4>
                  <div className="flex gap-4 mb-4">
                    <div className="border-l-4 p-2 border-l-[#409bd4]">
                      <h6 className="text-lg font-medium text-gray-600">
                        Consultation Fee
                      </h6>
                      <h4 className="text-lg font-bold">
                        $ {doctor.fee}{" "}
                        <span className="text-sm font-bold text-gray-600">
                          (Incl.VAT)
                        </span>
                      </h4>
                    </div>
                    <div className="border-l-4 p-2 border-l-[#409bd4]">
                      <h6 className="text-lg font-medium text-gray-600">
                        Follow-Up Fee
                      </h6>
                      <h4 className="text-lg font-bold">
                        $ {doctor.followUpFee}{" "}
                        <span className="text-sm font-bold text-gray-600">
                          (Incl.VAT)
                        </span>
                      </h4>
                      <p>(Within 14 Days)</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="border-l-4 p-2 border-l-[#409bd4]">
                      <h6 className="text-lg font-medium text-gray-600">
                        Doctor Code
                      </h6>
                      <h4 className="text-lg font-bold">{doctor.doctorCode}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="my-8">
              <h4 className="text-xl font-bold mb-2">
                {doctor.experience.hospitalName}
              </h4>
              <div className="border-l-4 p-2 border-l-[#409bd4]">
                <h6 className="text-lg font-medium text-gray-600">
                  {doctor.experience.start} - {doctor.experience.end}
                </h6>
                <h4 className="text-lg font-bold">
                  {" "}
                  Experience: {doctor.experience.year} + Years
                </h4>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="my-8">
              <div className={`${reviews.length !== 0 ? "mb-16" : "mb-0"}`}>
                {reviews?.map((review) => (
                  <div key={review._id} className="mb-4">
                    <h2 className="text-xl font-bold">{review.name}</h2>
                    <div className="flex items-center gap-4">
                    <Rating
                      className="mb-1"
                      initialRating={review.rating}
                      emptySymbol={
                        <AiOutlineStar className="text-orange-300 w-4 h-4" />
                      }
                      fullSymbol={
                        <AiFillStar className="text-orange-300 w-4 h-4" />
                      }
                    ></Rating>
                    <button onClick={() => handleDeleteReview(review._id)}>delete</button>
                    </div>
                    <p>{review.comment}</p>
                  </div>
                ))}
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Your Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name")}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="rating"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Rating:
                  </label>
                  <input
                    type="number"
                    id="name"
                    {...register("rating")}
                    max={5}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="comment"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Your Review:
                  </label>
                  <textarea
                    id="comment"
                    {...register("comment")}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="flex items-center relative w-28 border-2 border-[#409bd4] text-[#409bd4] px-4 py-2 rounded-full group mt-4"
                  >
                    <span>Review</span>
                    <span className="absolute w-1/6 right-3 group-hover:w-5/6 box-content duration-300 flex justify-center bg-white rounded-full">
                      <FaArrowRightLong className="h-10" />
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default DoctorProfile;
