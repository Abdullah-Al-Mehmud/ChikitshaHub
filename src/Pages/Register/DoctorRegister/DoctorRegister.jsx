import { useForm } from "react-hook-form";
import Select from "react-select";

// import { Link } from "react-router-dom";
// import useAxiosPrivet from "../../../Hooks/useAxiosPrivet";
import Swal from "sweetalert2";
import axios from "axios";
//import registerImg from "../../../assets/images/register.png"

const DoctorRegister = () => {
  // const axiosPrivate = useAxiosPrivet();
  const weekDays = [
    { value: "Saturday", label: "Saturday" },
    { value: "Sunday", label: "Sunday" },
    { value: "Monday", label: "Monday" },
    { value: "Tuesday", label: "Tuesday" },
    { value: "Wednesday", label: "Wednesday" },
    { value: "Thursday", label: "Thursday" },
    { value: "Friday", label: "Friday" },
  ];

  const degrees = [
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
    console.log(data);

    const newDoctor = {
      name: data.name,
      title: data.title,
      specialties: data.specialties,
      category: data.category,
      doctorCode: data.doctorCode,
      location: data.location,
      rating: 0,
      fee: data.fee,
      followUpFee: data.followUpFee,
      availability: data.availability?.map((avail) => avail?.value),
      degrees: data.degrees?.map((degree) => degree?.value),
      education: {
        academy: data.academy,
        courseName: data.courseName,
        session: data.session,
      },
      experience: {
        hospitalName: data.hospitalName,
        startDate: data.startDate,
        endDate: data.endDate,
        years: data.years,
      },
      aboutDoctor: data.aboutDoctor,
    };
    console.log(newDoctor);
    axios.post("http://localhost:3000/doctors", newDoctor).then((result) => {
      if (result.data.success) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Registration Successful!!",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      }
    });
  };

  return (
    <>
      <div className="bg-[url('https://i.ibb.co/qYS91BQ/banner2.jpg')] bg-no-repeat bg-cover">
        <div className="w-full bg-black bg-opacity-70 lg:pb-40 lg:pt-36 md:pb-28 md:pt-24 pb-20 pt-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="pt-10 text-[#ffffffea] w-full lg:text-left text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                {`Doctor's Registration Page`}
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
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="px-8 pt-6 pb-8 mb-4 bg-white  rounded">
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
                        Title
                      </label>

                      <select
                        {...register("title", { required: true })}
                        className="w-full px-3 py-2 text-sm leading-tight   border rounded shadow  focus:outline-none focus:shadow-outline"
                        required
                        id="title"
                        name="title">
                        <option disabled defaultValue>
                          Choose Title
                        </option>
                        <option value="Dr.">Dr.</option>
                        <option value="Prof. Dr.">Prof. Dr.</option>
                        <option value=" Assoc. Prof. Dr.">
                          Assoc. Prof. Dr.
                        </option>
                        <option value=" Asst. Prof. Dr.">
                          Asst. Prof. Dr.
                        </option>
                      </select>
                      {errors.title && (
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

                      <select
                        {...register("specialties", { required: true })}
                        className="w-full px-3 py-2 text-sm leading-tight   border rounded shadow  focus:outline-none focus:shadow-outline"
                        required
                        id="Specialties"
                        name="Specialties">
                        <option disabled defaultValue>
                          Choose specialties
                        </option>
                        <option value=" General Practitioners">
                          General Practitioners
                        </option>
                        <option value="Cardiologists">Cardiologists</option>
                        <option value="Dermatologists">Dermatologists</option>
                        <option value=" Pediatricians">Pediatricians</option>
                        <option value="Orthopedic Surgeons">
                          Orthopedic Surgeons
                        </option>
                        <option value=" Psychiatrists">Psychiatrists</option>
                        <option value="  Gynecologists">Gynecologists</option>
                        <option value="  Endocrinologists">
                          Endocrinologists
                        </option>
                        <option value="  Ophthalmologists">
                          Ophthalmologists
                        </option>
                        <option value="  Urologists">Urologists</option>
                        <option value="  ENT Specialists">
                          ENT Specialists
                        </option>
                        <option value="  Gastroenterologists">
                          Gastroenterologists
                        </option>
                        <option value="  Neurologists">Neurologists</option>
                        <option value="  Allergists/Immunologists">
                          Allergists/Immunologists
                        </option>
                        <option value="  Infectious Disease Specialists">
                          Infectious Disease Specialists
                        </option>
                        <option value="  Emergency Medicine Physicians">
                          Emergency Medicine Physicians
                        </option>
                      </select>
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
                        type="number"
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

                  {/* availability  */}
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
                          setValue("availability", selectedOptions);
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

                    <div className="w-1/2 mb-4">
                      <label className="block mb-2 text-sm font-bold  ">
                        {`Degrees`}
                      </label>
                      <Select
                        {...register("degrees", { required: true })}
                        // defaultValue={[weekDays[4], weekDays[7]]}
                        isMulti
                        onChange={(selectedOptions) => {
                          setValue("degrees", selectedOptions);
                        }}
                        options={degrees}
                        className=" border-2  border-main-blue-300 rounded-lg"
                        classNamePrefix="select"
                        required
                      />
                      {errors.degrees && (
                        <span className="text-red-600">
                          {`Doctor's Title is required`}
                        </span>
                      )}
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
                  {/* experience */}
                  <div className="font-bold mt-2 text-2xl">Experience : </div>
                  <div className="flex gap-5 mt-4 w-full">
                    <div className="w-1/2 mb-4">
                      <label className="block mb-2 text-sm font-bold  ">
                        Hospital Name
                      </label>
                      <input
                        type="text"
                        {...register("hospitalName", { required: true })}
                        name="hospitalName"
                        placeholder="hospitalName"
                        className="w-full px-3 py-2 text-sm leading-tight   border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        required
                      />
                      {errors.hospitalName && (
                        <span className="text-red-600">Fee is required</span>
                      )}
                    </div>
                    <div className="mb-4 w-1/2">
                      <label className="block mb-2 text-sm font-bold  ">
                        Start Date
                      </label>
                      <input
                        type="date"
                        {...register("startDate", { required: true })}
                        name="startDate"
                        className="w-full px-3 py-2 text-sm leading-tight   border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        required
                      />
                      {errors.startDate && (
                        <span className="text-red-600">
                          Start Date is required
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-5 mt-4 w-full">
                    <div className="w-1/2 mb-4">
                      <label className="block mb-2 text-sm font-bold  ">
                        End Date
                      </label>
                      <input
                        type="text"
                        {...register("endDate", { required: true })}
                        name="endDate"
                        placeholder="endDate"
                        className="w-full px-3 py-2 text-sm leading-tight   border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        required
                      />
                      {errors.endDate && (
                        <span className="text-red-600">Fee is required</span>
                      )}
                    </div>
                    <div className="mb-4 w-1/2">
                      <label className="block mb-2 text-sm font-bold  ">
                        Years
                      </label>
                      <input
                        type="number"
                        {...register("years", { required: true })}
                        name="years"
                        className="w-full px-3 py-2 text-sm leading-tight   border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        required
                      />
                      {errors.years && (
                        <span className="text-red-600">
                          Follow Up Fee is required
                        </span>
                      )}
                    </div>
                  </div>
                  {/* about doctor */}
                  <div className="mb-4 w-full">
                    <label className="block mb-2 text-sm font-bold  ">
                      About Doctor
                    </label>
                    <textarea
                      type="text"
                      {...register("aboutDoctor", { required: true })}
                      placeholder="About Doctor"
                      className="w-full px-3 py-2 text-sm leading-tight h-44  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      required
                    />
                    {errors.aboutDoctor && (
                      <span className="text-red-600">
                        About Doctor is required
                      </span>
                    )}
                  </div>
                  {/* email and pass */}
                  {/* <div className="mb-4">
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
                  </div> */}
                  <div className=" text-center">
                    <button
                      className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700  dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                      type="submit">
                      Register Account
                    </button>
                  </div>
                  {/* <hr className="mb-6 border-t" /> */}
                  {/* forgot password */}
                  {/* <div className="text-center">
                    <a
                      className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                      href="#">
                      Forgot Password?
                    </a>
                  </div> */}
                  {/* <div className="text-center">
                    <p className="inline-block cursor-pointer text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800">
                      Already have an account? <Link to="/login">Log In</Link>
                    </p>
                  </div> */}
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
