/* eslint-disable no-unused-vars */
import { FaFacebook } from "react-icons/fa6";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { signInWithGoogleAsync, signInAsync } from "../redux/authThunks";
import useAxiosPrivet from "../Hooks/useAxiosPrivet";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const loading = useSelector((state) => state.auth.loading);
  const axiosPrivate = useAxiosPrivet();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    const handleLogIn = async () => {
      try {
        const logInResult = await dispatch(signInAsync(email, password, navigate));  
        
      } catch (error) {
        // console.log(error);
      }
    };
    handleLogIn();
    // console.log(email, password);
  };

  const handleSignInWithGoogle = () => {
    dispatch(signInWithGoogleAsync()).then((result) => {
      // console.log(result.payload.displayName);
      const googleLoginUser = {
        name: result?.payload?.displayName,
        email: result?.payload?.email,
        photoUrl: result?.payload?.photoURL,
        role: "user",
      };
      // console.log(googleLoginUser);
      axiosPrivate.post("/users", googleLoginUser);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Registration Successful",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/dashboard/home");
    });
    // axiosPrivate.post("/users", googleLoginUser).then((result) => {
    //   console.log(result);
    // });

    // axiosPrivate.post("/users", googleLoginUser).then((result) => {
    //   console.log(result);
    //   // if (result.data.success) {
    //   //   Swal.fire({
    //   //     position: "center",
    //   //     icon: "success",
    //   //     title: "Registration Successful!!",
    //   //     showConfirmButton: false,
    //   //     timer: 1500,
    //   //   });
    //   //   // reset();
    //   // }
    // });

    // navigate("/");
  };
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  // console.log(user);

  return (
    <div>
      <div className="md:pt-10 py-6">
        <div className="flex items-center bg-white rounded-lg shadow-xl overflow-hidden mx-auto max-w-sm lg:max-w-4xl ">
          <div className="hidden lg:block lg:w-1/2 bg-cover">
            <img src="https://i.ibb.co/Lh5BzVX/log-Inbanner.png" alt="" />
          </div>
          <div className="w-full p-8 lg:w-1/2">
            <button
              onClick={() => handleSignInWithGoogle()}
              className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100 w-full"
            >
              <div className="px-4 py-3">
                <svg className="h-6 w-6" viewBox="0 0 40 40">
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#FFC107"
                  />
                  <path
                    d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#1976D2"
                  />
                </svg>
              </div>
              <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">
                Sign in with Google
              </h1>
            </button>
            {/* <button className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100 w-full">
              <div className="px-4 py-3">
                <span className="text-sky-500 text-2xl">
                  <FaFacebook />
                </span>
              </div>
              <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">
                Sign in with Facebook
              </h1>
            </button> */}
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 lg:w-1/4"></span>
              <a
                href="#"
                className="text-xs text-center text-gray-500 uppercase"
              >
                or login with email
              </a>
              <span className="border-b w-1/5 lg:w-1/4"></span>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-4">
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

              <div className="mt-4">
                <div className="flex justify-between">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Password
                  </label>
                  <a href="#" className="text-xs text-gray-500">
                    Forget Password?
                  </a>
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
              <div className="mt-8">
                <button type="submit" className="w-full relative rounded-full pl-5 py-2 font-bold border-2 bg-[#409ad4] text-white outline-none">
                  Login
                </button>
              </div>
            </form>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 md:w-1/4"></span>
              <Link
                to={"/userRegister"}
                className="text-xs font-bold uppercase"
              >
                or sign up
              </Link>
              <span className="border-b w-1/5 md:w-1/4"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
