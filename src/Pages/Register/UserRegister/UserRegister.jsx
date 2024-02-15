/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { signUpAsync, updateUserAsync } from "../../../redux/authThunks";
import useAxiosPrivet from "../../../Hooks/useAxiosPrivet";
import { imageUpload } from "../../../api/utils";

const UserRegistration = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const axiosPrivate = useAxiosPrivet();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const name = data.name;
    const email = data.email;
    const photoUrl = data?.image?.[0];
    const password = data.password;
    const role = "user";
    const img_url = await imageUpload(photoUrl);
    const userInfo = {
      name,
      email,
      photoUrl: img_url?.data?.display_url,
      role,
    };
    const handleRegistration = async () => {
      try {
        const signUpResult = await dispatch(signUpAsync(email, password));
        await dispatch(updateUserAsync(name, photoUrl));
        const userData = await axiosPrivate.post("/users", userInfo);
        if (userData.data.success) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Registration Successful",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        } else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Already Registered",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } catch (error) {
        // Handle errors if needed
        // console.log(error);
      }
    };

    handleRegistration();
  };
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  return (
    <>
      {/* <Registration /> */}
      <div className="md:pt-10 py-10">
        <div className="flex gap-10 items-center bg-white rounded-lg  overflow-hidden mx-auto max-w-sm lg:max-w-5xl">
          <div className="hidden lg:block lg:w-2/3 bg-cover">
            <img
              src="
https://i.ibb.co/kHcQKSp/416184993-317205861315040-2894419172803826832-n.png"
              alt=""
            />
          </div>
          <div className="w-full p-8 lg:w-2/3">
            <h3 className="py-4 text-4xl font-bold text-center  ">
              Create an Account!!
            </h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Full Name
                </label>
                <input
                  {...register("name", {
                    required: "input field is required",
                  })}
                  className="w-full relative rounded-full pl-5 py-2 font-bold border-2 border-[#409ad4] focus:border-[#409ad4] outline-none"
                  type="fullName"
                  placeholder="Your Name"
                />
                <p className="text-red-500 py-3 font-bold">
                  {errors.fullName?.message}
                </p>
              </div>
              <div className="">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Profile Photo
                </label>
                <input
                  {...register("image", {
                    required: "input field is required",
                  })}
                  name="image"
                  className="w-full relative rounded-full pl-5 py-2 font-bold border-0 border-[#409ad4] focus:border-[#409ad4] outline-none text-[#409ad4]"
                  type="file"
                  placeholder="Your Photo URL"
                />
                <p className="text-red-500 py-3 font-bold">
                  {errors.image?.message}
                </p>
              </div>
              <div className="">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email Address
                </label>
                <input
                  {...register("email", {
                    required: "input field is required",
                  })}
                  className="w-full relative rounded-full pl-5 py-2 font-bold border-2 border-[#409ad4] focus:border-[#409ad4] outline-none"
                  type="email"
                  placeholder="example@gmail.com"
                />
                <p className="text-red-500 py-3 font-bold">
                  {errors.email?.message}
                </p>
              </div>
              {/* new */}

              <div className="">
                <div className="flex justify-between">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Password
                  </label>
                </div>
                <div className="relative">
                  <input
                    {...register("password", {
                      required: "input field is required",
                      minLength: {
                        value: 8,
                        message: "you password must be 8 character",
                      },
                    })}
                    type={showPassword ? "text" : "password"}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full relative rounded-full pl-5 py-2 font-bold border-2 border-[#409ad4] focus:border-[#409ad4] outline-none"
                    placeholder="***********"
                    // type="password"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-5 px-3 flex items-center focus:outline-none h-10"
                  >
                    {showPassword ? (
                      <FaEyeSlash className="text-gray-500" />
                    ) : (
                      <FaEye className="text-gray-500" />
                    )}
                  </button>
                  <p className="text-red-500 py-3 font-bold">
                    {errors.password?.message}
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <button className="w-full relative rounded-full pl-5 py-2 font-bold border-2 bg-[#409ad4] text-white outline-none">
                  Register
                </button>
              </div>
            </form>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 md:w-1/4"></span>

              <Link to={"/login"} className="text-xs font-bold uppercase">
                or Log In
              </Link>
              <span className="border-b w-1/5 md:w-1/4"></span>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="">
            <div className="flex justify-between mr-[14%]">
              <div></div>
              <div className="flex bg-white items-center rounded-r-lg gap-5  px-[8.5%] py-10">
                <p className="font-bold ">Are you a doctor?</p>
                <Link
                  to="/doctorRegister"
                  className="border-[#409bd4] border rounded-full px-5 py-2"
                >
                  Join as a doctor
                </Link>
              </div>
            </div>
          </div> */}
    </>
  );
};

export default UserRegistration;
