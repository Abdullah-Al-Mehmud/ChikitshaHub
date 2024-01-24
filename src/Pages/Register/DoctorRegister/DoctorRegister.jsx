import { useForm } from "react-hook-form";
import Select from "react-select";

import { Link } from "react-router-dom";
//import registerImg from "../../../assets/images/register.png"

const DoctorRegister = () => {
  const weekDays = [
    { value: "Saturday", label: "Saturday" },
    { value: "Sunday", label: "Sunday" },
    { value: "Monday", label: "Monday" },
    { value: "Tuesday", label: "Tuesday" },
    { value: "Wednesday", label: "Wednesday" },
    { value: "Thursday", label: "Thursday" },
    { value: "Friday", label: "Friday" },
  ];

  const {
    register,
    setValue,
    formState: { errors },
  } = useForm();

  return (
    <>
      <div className="bg-[url('https://i.ibb.co/qYS91BQ/banner2.jpg')] bg-no-repeat bg-cover">
        <div className="w-full bg-black bg-opacity-70 lg:pb-40 lg:pt-36 md:pb-28 md:pt-24 pb-20 pt-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="pt-10 text-[#ffffffea] w-full lg:text-left text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                Doctor's Registration Page
              </h2>
              <p className="font-medium text-white mt-1">
                Home &gt; <span className="text-[#409bd4]">Register Here</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full py-20 bg-gray-400 ">
        <div className="mx-auto">
          <div className="flex justify-center px-6 py-6">
            <div className="w-full xl:w-3/4 lg:w-11/12 flex gap-5 items-center">
              <div className="w-full  bg-white  p-5 rounded-lg lg:rounded-l-none">
                <h3 className="py-7 text-4xl font-bold text-center ">
                  Doctor Registration!!
                </h3>
                <form className="px-8 pt-6 pb-8 mb-4 bg-white  rounded">
                  <div className="flex gap-5 w-full">
                    <div className="w-1/2 mb-4">
                      <label className="block mb-2 text-sm font-bold  ">
                        Name
                      </label>
                      <input
                        type="text"
                        {...register("name", { required: true })}
                        name="name"
                        placeholder="Name"
                        className="w-full px-3 py-2 text-sm leading-tight  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        required
                      />
                      {errors.name && (
                        <span className="text-red-600">Name is required</span>
                      )}
                    </div>
                    <div className="mb-4 w-1/2">
                      <label className="block mb-2 text-sm font-bold  ">
                        Photo URL
                      </label>
                      <input
                        type="text"
                        {...register("photoURL", { required: true })}
                        placeholder="Photo Url"
                        className="w-full px-3 py-2 text-sm leading-tight   border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        required
                      />
                      {errors.photoURL && (
                        <span className="text-red-600">
                          Photo Url is required
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-5 w-full">
                    <div className="w-1/2 mb-4">
                      <label className="block mb-2 text-sm font-bold  ">
                        Specialties
                      </label>
                      <input
                        type="text"
                        {...register("specialties", { required: true })}
                        name="specialties"
                        placeholder="Specialties"
                        className="w-full px-3 py-2 text-sm leading-tight   border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        required
                      />
                      {errors.specialties && (
                        <span className="text-red-600">
                          Specialties is required
                        </span>
                      )}
                    </div>
                    <div className="mb-4 w-1/2">
                      <label className="block mb-2 text-sm font-bold  ">
                        Category
                      </label>
                      <input
                        type="text"
                        {...register("category", { required: true })}
                        placeholder="Category"
                        className="w-full px-3 py-2 text-sm leading-tight   border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        required
                      />
                      {errors.category && (
                        <span className="text-red-600">
                          Category is required
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-5 w-full">
                    <div className="w-1/2 mb-4">
                      <label className="block mb-2 text-sm font-bold  ">
                        Doctor Code
                      </label>
                      <input
                        type="text"
                        {...register("doctorCode", { required: true })}
                        name="doctorCode"
                        placeholder="Doctor Code"
                        className="w-full px-3 py-2 text-sm leading-tight   border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        required
                      />
                      {errors.doctorCode && (
                        <span className="text-red-600">
                          Doctor Code is required
                        </span>
                      )}
                    </div>
                    <div className="mb-4 w-1/2">
                      <label className="block mb-2 text-sm font-bold  ">
                        Location
                      </label>
                      <input
                        type="text"
                        {...register("location", { required: true })}
                        placeholder="Location"
                        className="w-full px-3 py-2 text-sm leading-tight   border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        required
                      />
                      {errors.location && (
                        <span className="text-red-600">
                          Location is required
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-5 w-full">
                    <div className="w-1/2 mb-4">
                      <label className="block mb-2 text-sm font-bold  ">
                        Fee
                      </label>
                      <input
                        type="number"
                        {...register("fee", { required: true })}
                        name="fee"
                        placeholder="Doctor Fee"
                        className="w-full px-3 py-2 text-sm leading-tight   border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        required
                      />
                      {errors.fee && (
                        <span className="text-red-600">Fee is required</span>
                      )}
                    </div>
                    <div className="mb-4 w-1/2">
                      <label className="block mb-2 text-sm font-bold  ">
                        Follow Up Fee
                      </label>
                      <input
                        type="text"
                        {...register("followUpFee", { required: true })}
                        name="followUpFee"
                        placeholder="Follow Up Fee"
                        className="w-full px-3 py-2 text-sm leading-tight   border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        required
                      />
                      {errors.followUpFee && (
                        <span className="text-red-600">
                          Follow Up Fee is required
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-5 w-full">
                    <div className="w-1/2 mb-4">
                      <label className="block mb-2 text-sm font-bold  ">
                        Availability
                      </label>

                      <Select
                        {...register("availability", { required: true })}
                        // defaultValue={[weekDays[4], weekDays[7]]}
                        isMulti
                        onChange={(selectedOptions) => {
                          setValue("hashtags", selectedOptions);
                        }}
                        options={weekDays}
                        className=" border-2  border-main-blue-300 rounded-lg"
                        classNamePrefix="select"
                        required
                      />
                      {errors.availability && (
                        <span className="text-red-600">
                          Availability is required
                        </span>
                      )}
                    </div>
                    <div className="mb-4 w-1/2">
                      <label className="block mb-2 text-sm font-bold  ">
                        About Doctor
                      </label>
                      <input
                        type="text"
                        {...register("aboutDoctor", { required: true })}
                        placeholder="About Doctor"
                        className="w-full px-3 py-2 text-sm leading-tight   border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        required
                      />
                      {errors.aboutDoctor && (
                        <span className="text-red-600">
                          About Doctor is required
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-5 w-full">
                    <div className="w-1/2 mb-4">
                      <label className="block mb-2 text-sm font-bold  ">
                        Rating
                      </label>
                      <input
                        type="number"
                        {...register("rating", { required: true })}
                        name="rating"
                        placeholder="Rating"
                        className="w-full px-3 py-2 text-sm leading-tight   border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        required
                      />
                      {errors.rating && (
                        <span className="text-red-600">Rating is required</span>
                      )}
                    </div>
                    <div className="mb-4 w-1/2">
                      <label className="block mb-2 text-sm font-bold  ">
                        Academy
                      </label>
                      <input
                        type="text"
                        {...register("academy", { required: true })}
                        name="academy"
                        placeholder="Academy"
                        className="w-full px-3 py-2 text-sm leading-tight   border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        required
                      />
                      {errors.academy && (
                        <span className="text-red-600">
                          Follow Up Fee is required
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-5 w-full">
                    <div className="w-1/2 mb-4">
                      <label className="block mb-2 text-sm font-bold  ">
                        Course Name
                      </label>
                      <input
                        type="text"
                        {...register("courseName", { required: true })}
                        name="courseName"
                        placeholder="Course Name"
                        className="w-full px-3 py-2 text-sm leading-tight   border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        required
                      />
                      {errors.courseName && (
                        <span className="text-red-600">
                          Course Name is required
                        </span>
                      )}
                    </div>
                    <div className="mb-4 w-1/2">
                      <label className="block mb-2 text-sm font-bold  ">
                        Session
                      </label>
                      <input
                        type="number"
                        {...register("session", { required: true })}
                        name="session"
                        placeholder="Session"
                        className="w-full px-3 py-2 text-sm leading-tight   border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        required
                      />
                      {errors.academy && (
                        <span className="text-red-600">
                          Session Fee is required
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold  ">
                      Email
                    </label>
                    <input
                      type="email"
                      {...register("email", {
                        required: true,
                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      })}
                      name="email"
                      placeholder="Email"
                      className=" w-full px-3 py-2 mb-3 text-sm leading-tight   border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      required
                    />
                    {errors.email && errors.email.type === "required" && (
                      <span className="text-red-600">Email is required</span>
                    )}
                    {errors.email && errors.email.type === "pattern" && (
                      <span className="text-red-600">Invalid email format</span>
                    )}
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold  ">
                      Password
                    </label>
                    <input
                      type="password"
                      {...register("password", {
                        required: true,
                        minLength: 6,
                        maxLength: 20,
                        pattern:
                          /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                      })}
                      name="password"
                      placeholder="password"
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight   rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      required
                    />
                    {errors.password?.type === "required" && (
                      <p className="text-red-600">Password is required</p>
                    )}
                    {errors.password?.type === "minLength" && (
                      <p className="text-red-600">
                        Password must be 6 character
                      </p>
                    )}
                    {errors.password?.type === "maxLength" && (
                      <p className="text-red-600">
                        Password must be less than 20 character
                      </p>
                    )}
                    {errors.password?.type === "pattern" && (
                      <p className="text-red-600">
                        Password must have one uppercase one lowercase, one
                        number and one special character{" "}
                      </p>
                    )}
                  </div>
                  <div className="mb-6 text-center">
                    <button
                      className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700  dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                      type="button">
                      Register Account
                    </button>
                  </div>
                  <hr className="mb-6 border-t" />
                  <div className="text-center">
                    <a
                      className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                      href="#">
                      Forgot Password?
                    </a>
                  </div>
                  <div className="text-center">
                    <p className="inline-block cursor-pointer text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800">
                      Already have an account? <Link to="/login">Log In</Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorRegister;
