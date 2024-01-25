/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { signUpAsync, updateUserAsync } from "../../../redux/authThunks";

const UserRegistration = () => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: "password",
      email: "johon12@gmail.com",
    },
  });

  const onSubmit = (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const userInfo = {
      name,
      email,
    };
    const handleRegistration = async () => {
      try {
        const signUpResult = await dispatch(signUpAsync(email, password));
        await dispatch(updateUserAsync(name));
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Registration Successful",
          showConfirmButton: false,
          timer: 1500,
        });
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
      <div className="bg-[url('https://i.ibb.co/qYS91BQ/banner2.jpg')] bg-no-repeat bg-cover">
        <div className="w-full bg-black bg-opacity-70 lg:pb-40 lg:pt-36 md:pb-28 md:pt-24 pb-20 pt-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="pt-10 text-[#ffffffea] w-full lg:text-left text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                Register Here
              </h2>
              <p className="font-medium text-white mt-1">
                Home &gt; <span className="text-[#409bd4]">Register Here</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full bg-white">
        <div className="mx-auto py-20 bg-base-200">
          <div className="flex justify-center px-6 py-6">
            <div className="w-full xl:w-3/4 lg:w-11/12 flex gap-5 items-center bg-white rounded-lg">
              <div className="w-full h-auto  hidden lg:block lg:w-5/12 bg-cover rounded-l-lg">
                <img
                  className=""
                  src="https://i.ibb.co/t8C35YM/416184993-317205861315040-2894419172803826832-n.png"
                  alt=""
                />
              </div>
              <div className="w-full lg:w-7/12 bg-whit p-5 rounded-lg lg:rounded-l-none">
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
                      className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                      type="fullName"
                    />
                    <p className="text-red-500 py-3 font-bold">
                      {errors.fullName?.message}
                    </p>
                  </div>
                  <div className="mt-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Profile Photo
                    </label>
                    <input
                      {...register("photo", {
                        required: "input field is required",
                      })}
                      className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                      type="file"
                    />
                    <p className="text-red-500 py-3 font-bold">
                      {errors.photo?.message}
                    </p>
                  </div>
                  <div className="mt-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Email Address
                    </label>
                    <input
                      {...register("email", {
                        required: "input field is required",
                      })}
                      className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                      type="email"
                    />
                    <p className="text-red-500 py-3 font-bold">
                      {errors.email?.message}
                    </p>
                  </div>
                  {/* new */}

                  <div className="mt-4">
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
                        className="block bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4  w-full appearance-none "
                        // type="password"
                      />
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute inset-y-0 right-0 px-3 flex items-center focus:outline-none h-10"
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
                  <div className="mt-8">
                    <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                      Register
                    </button>
                  </div>
                </form>
                <div className="mt-4 flex items-center justify-between">
                  <span className="border-b w-1/5 md:w-1/4"></span>

                  <Link
                    to={"/login"}
                    className="text-xs text-gray-500 uppercase"
                  >
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
        </div>
      </div>
    </>
  );
};

export default UserRegistration;
