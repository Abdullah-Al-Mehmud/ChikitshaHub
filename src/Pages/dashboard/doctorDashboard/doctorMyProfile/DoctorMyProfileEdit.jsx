/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import useAxiosPrivet from "../../../../Hooks/useAxiosPrivet";
import { useQuery } from "@tanstack/react-query";
const DoctorMyProfileEdit = () => {
  // console.log(data);
  const [doctorType1, setDoctorType1] = useState("");
  const user = useSelector((state) => state.auth.user);
  const axios = useAxiosPrivet();
  // console.log(user);
  const { data: doctorUpdate = [], refetch } = useQuery({
    queryKey: ["doctorUpdate"],
    queryFn: async () => {
      const res = await axios.get(`/doctors/1/${email}`);
      return res.data;
    },
  });
  const { photoURL, email, displayName } = user || {};
  const {
    _id,
    name,
    title,
    img,
    doctorEmail,
    status,
    specialties,
    degrees,
    doctorCode,
    bmdcNumber,
    location,
    gender,
    fee,
    doctorType,
    followUpFee,
    availability,
    aboutDoctor,
    rating,
    session,
    academy,
    courseName,
    education,
    experience,
    hospitalName,
    startDate,
    endDate,
    years,
    joiningDate,
  } = doctorUpdate || {};
  const weekDays = [
    { value: "Saturday", label: "Saturday" },
    { value: "Sunday", label: "Sunday" },
    { value: "Monday", label: "Monday" },
    { value: "Tuesday", label: "Tuesday" },
    { value: "Wednesday", label: "Wednesday" },
    { value: "Thursday", label: "Thursday" },
    { value: "Friday", label: "Friday" },
  ];

  const Alldegrees = [
    { value: "Doctor of Medicine (MD)", label: "Doctor of Medicine (MD)" },
    {
      value: "Doctor of Osteopathic Medicine (DO)",
      label: "Doctor of Osteopathic Medicine (DO)",
    },
    {
      value: "Doctor of Dental Medicine (DMD)",
      label: "Doctor of Dental Medicine (DMD)",
    },
    {
      value: "Doctor of Veterinary Medicine (DVM)",
      label: "Doctor of Veterinary Medicine (DVM)",
    },
    {
      value: "Doctor of Philosophy (Ph.D.)",
      label: "Doctor of Philosophy (Ph.D.)",
    },
    {
      value: "Doctor of Nursing Practice (DNP)",
      label: "Doctor of Nursing Practice (DNP)",
    },
    {
      value: "Doctor of Chiropractic (DC)",
      label: "Doctor of Chiropractic (DC)",
    },
    {
      value: "Doctor of Pharmacy (Pharm.D.)",
      label: "Doctor of Pharmacy (Pharm.D.)",
    },
  ];
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);

    const updateDoctor = {
      name: displayName,
      title: data.title,
      specialties: data.specialties,

      img: photoURL,
      status: "pending",
      doctorEmail: email,
      // role: "pending",
      // category: data.category,
      doctorCode: doctorCode,
      gender: data.gender,
      location: data.location,
      doctorType: data.doctorType,
      rating: 0,
      fee: data.fee,
      followUpFee: data.followUpFee,
      availability: data.availability?.map((avail) => avail?.value),
      degrees: data.degrees?.map((degree) => degree?.value),
      bmdcNumber: data.bmdc,
      education: {
        academy: data.academy,
        courseName: data.courseName,
        session: data.session,
      },
      experience: {
        hospitalName: data.hospitalName,
        start: data.startDate,
        end: data.endDate,
        year: data.years,
      },
      aboutDoctor: data.aboutDoctor,
    };
    // console.log(updateDoctor);
    axios.put(`/doctors/${_id}`, updateDoctor).then((result) => {
      // console.log(result);
      if (result.statusText === "OK") {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Account Update Successful!!",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      }
    });
  };
  const handleDoctorType = (e) => {
    setDoctorType1(e.target.value);
    // console.log(e.target.value);
  };
  return (
    <div>
      <div className="flex justify-center">
        <div className="w-full flex gap-5 items-center">
          <div className="w-full  bg-white rounded-lg lg:rounded-l-none">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="px-8 pt-6 pb-8 mb-4 bg-white  rounded"
            >
              <div className="grid lg:grid-cols-3 grid-cols-1 gap-2">
                <div className="mb-2">
                  <label className="block mb-2 text-sm font-bold  ">Name</label>
                  <input
                    type="text"
                    {...register("name", { required: false })}
                    name="name"
                    // placeholder="Name"
                    defaultValue={displayName}
                    className="w-full px-3 py-[10px] text-sm leading-tight  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-2">
                  <label className="block mb-2 text-sm font-bold  ">
                    Title
                  </label>

                  <select
                    {...register("title", { required: false })}
                    className="w-full px-3 py-2 text-sm leading-tight   border rounded shadow  focus:outline-none focus:shadow-outline"
                    id="title"
                    name="title"
                    defaultValue={title}
                  >
                    <option disabled defaultValue>
                      Choose Title
                    </option>
                    <option value="Dr.">Dr.</option>
                    <option value="Prof. Dr.">Prof. Dr.</option>
                    <option value=" Assoc. Prof. Dr.">Assoc. Prof. Dr.</option>
                    <option value=" Asst. Prof. Dr.">Asst. Prof. Dr.</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold  ">
                    BMDC Number
                  </label>
                  <input
                    type="text"
                    defaultValue={bmdcNumber}
                    {...register("bmdc", { required: false })}
                    placeholder="bmdc"
                    className="w-full px-3 py-2 text-sm leading-tight   border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
              <div className="grid lg:grid-cols-3 grid-cols-1 gap-2">
                <div className="mb-4 w-full">
                  <label className="block mb-2 text-sm font-bold  ">
                    Doctor Type
                  </label>

                  <select
                    onChange={handleDoctorType}
                    className="w-full px-3 py-2 text-sm leading-tight   border rounded shadow  focus:outline-none focus:shadow-outline"
                    id="doctorType"
                    name="doctorType"
                    defaultValue={doctorType}
                  >
                    <option disabled defaultValue>
                      Choose Title
                    </option>
                    <option value="Human Doctor">Human Doctor</option>
                    <option value="Veterinary Doctor">
                      Veterinary Doctor{" "}
                    </option>
                  </select>
                </div>
                <div className="w-full mb-4">
                  <label className="block mb-2 text-sm font-bold  ">
                    Specialties
                  </label>

                  {doctorType1 === "Veterinary Doctor" ? (
                    <div>
                      {/* vetenary */}
                      <select
                        {...register("specialties", { required: false })}
                        className="w-full px-3 py-2 text-sm leading-tight   border rounded shadow  focus:outline-none focus:shadow-outline"
                        id="Specialties"
                        name="specialties"
                        defaultValue={specialties}
                      >
                        <option disabled defaultValue>
                          Choose Title
                        </option>
                        <option value="Internal Medicine">
                          Internal Medicine
                        </option>
                        <option value="Surgery">Surgery</option>
                        <option value="Dermatologists">Dermatologists</option>
                        <option value="Diagnostic Imaging">
                          Diagnostic Imaging
                        </option>
                        <option value="Emergency and Critical Care">
                          Emergency and Critical Care
                        </option>
                        <option value="Dermatology">Dermatology</option>
                        <option value="Preventive Medicine and Public Health">
                          Preventive Medicine and Public Health
                        </option>
                        <option value="Dentistry">Dentistry</option>
                        <option value="Anesthesiology and Pain Management">
                          Anesthesiology and Pain Management
                        </option>
                        <option value="Behavioral Medicine">
                          Behavioral Medicine
                        </option>
                        <option value="Nutrition">Nutrition</option>
                      </select>
                    </div>
                  ) : (
                    <div>
                      {/* doctor */}
                      <select
                        {...register("specialties", { required: false })}
                        className="w-full px-3 py-2 text-sm leading-tight   border rounded shadow  focus:outline-none focus:shadow-outline"
                        id="Specialties"
                        name="specialties"
                        defaultValue={specialties}
                      >
                        <option disabled defaultValue>
                          Choose Title
                        </option>
                        <option value="General Practitioners">
                          General Practitioners
                        </option>
                        <option value="Cardiologists">Cardiologists</option>
                        <option value="Dermatologists">Dermatologists</option>
                        <option value="Pediatricians">Pediatricians</option>
                        <option value="Orthopedic Surgeons">
                          Orthopedic Surgeons
                        </option>
                        <option value="Psychiatrists">Psychiatrists</option>
                        <option value="Gynecologists">Gynecologists</option>
                        <option value="Endocrinologists">
                          Endocrinologists
                        </option>
                        <option value="Ophthalmologists">
                          Ophthalmologists
                        </option>
                        <option value="Urologists">Urologists</option>
                        <option value="ENT Specialists">ENT Specialists</option>
                        <option value="Gastroenterologists">
                          Gastroenterologists
                        </option>
                        <option value="Neurologists">Neurologists</option>
                        <option value="Allergists/Immunologists">
                          Allergists/Immunologists
                        </option>
                        <option value="Infectious Disease Specialists">
                          Infectious Disease Specialists
                        </option>
                        <option value="Emergency Medicine Physicians">
                          Emergency Medicine Physicians
                        </option>
                      </select>
                    </div>
                  )}
                </div>
                <div className="mb-4 w-full">
                  <label className="block mb-2 text-sm font-bold  ">
                    Location
                  </label>
                  <input
                    type="text"
                    {...register("location", { required: false })}
                    placeholder="Location"
                    defaultValue={location}
                    className="w-full px-3 py-2 text-sm leading-tight   border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
              <div className="flex gap-5 w-full">
                <div className="w-1/2 mb-4">
                  <label className="block mb-2 text-sm font-bold  ">Fee</label>
                  <input
                    type="number"
                    {...register("fee", { required: false })}
                    name="fee"
                    placeholder="Doctor Fee"
                    defaultValue={fee}
                    className="w-full px-3 py-2 text-sm leading-tight   border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4 w-1/2">
                  <label className="block mb-2 text-sm font-bold  ">
                    Follow Up Fee
                  </label>
                  <input
                    type="number"
                    {...register("followUpFee", { required: false })}
                    defaultValue={followUpFee}
                    name="followUpFee"
                    placeholder="Follow Up Fee"
                    className="w-full px-3 py-2 text-sm leading-tight   border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
              <div className="flex gap-5 w-full">
                <div className="w-1/2 mb-4">
                  <label className="block mb-2 text-sm font-bold  ">
                    Availability
                  </label>

                  <Select
                    {...register("availability", { required: false })}
                    // defaultValue={[weekDays[4], weekDays[7]]}
                    defaultValue={availability}
                    isMulti
                    onChange={(selectedOptions) => {
                      setValue("availability", selectedOptions);
                    }}
                    options={weekDays}
                    className=" border-2  border-main-blue-300 rounded-lg"
                    classNamePrefix="select"
                  />
                </div>

                <div className="w-1/2 mb-4">
                  <label className="block mb-2 text-sm font-bold  ">
                    {`Degrees`}
                  </label>
                  <Select
                    {...register("degrees", { required: false })}
                    defaultValue={degrees}
                    isMulti
                    onChange={(selectedOptions) => {
                      setValue("degrees", selectedOptions);
                    }}
                    options={Alldegrees}
                    className=" border-2  border-main-blue-300 rounded-lg"
                    classNamePrefix="select"
                  />
                </div>
              </div>
              <div className="font-bold mt-2 text-2xl">Education : </div>
              <div className="flex mt-4 gap-5 w-full">
                <div className="mb-4 w-1/2">
                  <label className="block mb-2 text-sm font-bold  ">
                    Academy
                  </label>
                  <input
                    type="text"
                    {...register("academy", { required: false })}
                    defaultValue={academy}
                    name="academy"
                    placeholder="Academy"
                    className="w-full px-3 py-2 text-sm leading-tight   border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="w-1/2 mb-4">
                  <label className="block mb-2 text-sm font-bold  ">
                    Course Name
                  </label>
                  <input
                    type="text"
                    {...register("courseName", { required: false })}
                    name="courseName"
                    defaultValue={courseName}
                    placeholder="Course Name"
                    className="w-full px-3 py-2 text-sm leading-tight   border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4 w-1/2">
                  <label className="block mb-2 text-sm font-bold  ">
                    Session
                  </label>
                  <input
                    type="text"
                    {...register("session", { required: false })}
                    name="session"
                    defaultValue={session}
                    placeholder="Session"
                    className="w-full px-3 py-2 text-sm leading-tight   border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
              {/* experience */}
              <div className="font-bold mt-2 text-2xl">Experience : </div>
              <div className="flex gap-5 mt-4 w-full">
                <div className="w-1/2 mb-4">
                  <label className="block mb-2 text-sm font-bold  ">
                    Hospital Name
                  </label>
                  <input
                    type="text"
                    {...register("hospitalName", { required: false })}
                    name="hospitalName"
                    defaultValue={hospitalName}
                    placeholder="hospitalName"
                    className="w-full px-3 py-2 text-sm leading-tight   border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4 w-1/2">
                  <label className="block mb-2 text-sm font-bold  ">
                    Start Date
                  </label>
                  <input
                    type="date"
                    {...register("startDate", { required: false })}
                    name="startDate"
                    defaultValue={startDate}
                    className="w-full px-3 py-2 text-sm leading-tight   border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
              <div className="flex gap-5 mt-4 w-full">
                <div className="w-1/2 mb-4">
                  <label className="block mb-2 text-sm font-bold  ">
                    End Date
                  </label>
                  <input
                    type="text"
                    {...register("endDate", { required: false })}
                    name="endDate"
                    defaultValue={endDate}
                    placeholder="endDate"
                    className="w-full px-3 py-2 text-sm leading-tight   border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4 w-1/2">
                  <label className="block mb-2 text-sm font-bold  ">
                    Years
                  </label>
                  <input
                    type="number"
                    {...register("years", { required: false })}
                    name="years"
                    defaultValue={years}
                    className="w-full px-3 py-2 text-sm leading-tight   border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>

              <div className="font-bold mt-2 mb-2 text-2xl">
                Select Your Gender{" "}
              </div>
              <div className="flex gap-2 mb-2">
                <label className="flex gap-1 font-bold ">
                  <input
                    type="radio"
                    value="male"
                    defaultValue={gender}
                    {...register("gender")}
                  />
                  Male
                </label>
                <br />
                <label className="flex gap-1 font-bold ">
                  <input type="radio" value="female" {...register("gender")} />
                  Female
                </label>
                <br />
                <label className="flex gap-1 font-bold ">
                  <input type="radio" value="other" {...register("gender")} />
                  Other
                </label>
              </div>
              {/* about doctor */}
              <div className="mb-4 w-full">
                <label className="block mb-2 text-sm font-bold  ">
                  About Doctor
                </label>
                <textarea
                  type="text"
                  {...register("aboutDoctor", { required: false })}
                  defaultValue={aboutDoctor}
                  placeholder="About Doctor"
                  className="w-full px-3 py-2 text-sm leading-tight h-44  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className=" text-center">
                <button
                  className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700  dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Update Your Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorMyProfileEdit;
