
import { useForm } from 'react-hook-form';

import { Link } from "react-router-dom";
//import registerImg from "../../../assets/images/register.png"

const DoctorRegister = () => {
    const {
        register,
        formState: { errors },
    } = useForm();

    return (
        <>
            <div className="h-full py-20 bg-gray-400 dark:bg-gray-900">
                <div className="mx-auto">
                    <div className="flex justify-center px-6 py-6">
                        <div className="w-full xl:w-3/4 lg:w-11/12 flex gap-5 items-center">
                            <div className="w-full  bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
                                <h3 className="py-4 text-2xl text-center text-gray-800 dark:text-white">Doctor Registration</h3>
                                <form className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">
                                    <div className='flex gap-5 w-full'>
                                        <div className="w-1/2 mb-4">
                                            <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" >
                                                Name
                                            </label>
                                            <input type="text" {...register("name", { required: true })} name="name" placeholder="Name" className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline" required />
                                            {errors.name && <span className="text-red-600">Name is required</span>}
                                        </div>
                                        <div className="mb-4 w-1/2">
                                            <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" >
                                                Photo URL
                                            </label>
                                            <input type="text" {...register("photoURL", { required: true })} placeholder="Photo Url" className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline" required />
                                            {errors.photoURL && <span className="text-red-600">Photo Url is required</span>}
                                        </div>
                                    </div>
                                    <div className='flex gap-5 w-full'>
                                        <div className="w-1/2 mb-4">
                                            <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" >
                                               Specialties
                                            </label>
                                            <input type="text" {...register("specialties", { required: true })} name="specialties" placeholder="Specialties" className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline" required />
                                            {errors.specialties && <span className="text-red-600">Specialties is required</span>}
                                        </div>
                                        <div className="mb-4 w-1/2">
                                            <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" >
                                               Category
                                            </label>
                                            <input type="text" {...register("category", { required: true })} placeholder="Category" className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline" required />
                                            {errors.category && <span className="text-red-600">Category is required</span>}
                                        </div>
                                    </div>
                                    <div className='flex gap-5 w-full'>
                                        <div className="w-1/2 mb-4">
                                            <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" >
                                                Doctor Code
                                            </label>
                                            <input type="text" {...register("doctorCode", { required: true })} name="doctorCode" placeholder="Doctor Code" className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline" required />
                                            {errors.doctorCode && <span className="text-red-600">Doctor Code is required</span>}
                                        </div>
                                        <div className="mb-4 w-1/2">
                                            <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" >
                                                Location
                                            </label>
                                            <input type="text" {...register("location", { required: true })} placeholder="Location" className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline" required />
                                            {errors.location && <span className="text-red-600">Location is required</span>}
                                        </div>
                                    </div>
                                    <div className='flex gap-5 w-full'>
                                        <div className="w-1/2 mb-4">
                                            <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" >
                                                Fee
                                            </label>
                                            <input type="number" {...register("fee", { required: true })} name="fee" placeholder="Doctor Fee" className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline" required />
                                            {errors.fee && <span className="text-red-600">Fee is required</span>}
                                        </div>
                                        <div className="mb-4 w-1/2">
                                            <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" >
                                                Follow Up Fee
                                            </label>
                                            <input type="text" {...register("followUpFee", { required: true })} name='followUpFee' placeholder="Follow Up Fee" className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline" required />
                                            {errors.followUpFee && <span className="text-red-600">Follow Up Fee is required</span>}
                                        </div>
                                    </div>
                                    <div className='flex gap-5 w-full'>
                                        <div className="w-1/2 mb-4">
                                            <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" >
                                                Availability
                                            </label>
                                            <input type="text" {...register("availability", { required: true })} name="availability" placeholder="Availability" className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline" required />
                                            {errors.availability && <span className="text-red-600">Availability is required</span>}
                                        </div>
                                        <div className="mb-4 w-1/2">
                                            <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" >
                                                About Doctor
                                            </label>
                                            <input type="text" {...register("aboutDoctor", { required: true })} placeholder="About Doctor" className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline" required />
                                            {errors.aboutDoctor && <span className="text-red-600">About Doctor is required</span>}
                                        </div>
                                    </div>
                                    <div className='flex gap-5 w-full'>
                                        <div className="w-1/2 mb-4">
                                            <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" >
                                                Rating
                                            </label>
                                            <input type="number" {...register("rating", { required: true })} name="rating" placeholder="Rating" className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline" required />
                                            {errors.rating && <span className="text-red-600">Rating is required</span>}
                                        </div>
                                        <div className="mb-4 w-1/2">
                                            <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" >
                                                Academy
                                            </label>
                                            <input type="text" {...register("academy", { required: true })} name='academy' placeholder="Academy" className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline" required />
                                            {errors.academy && <span className="text-red-600">Follow Up Fee is required</span>}
                                        </div>
                                    </div>
                                    <div className='flex gap-5 w-full'>
                                        <div className="w-1/2 mb-4">
                                            <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" >
                                                Course Name
                                            </label>
                                            <input type="text" {...register("courseName", { required: true })} name="courseName" placeholder="Course Name" className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline" required />
                                            {errors.courseName && <span className="text-red-600">Course Name is required</span>}
                                        </div>
                                        <div className="mb-4 w-1/2">
                                            <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" >
                                                Session
                                            </label>
                                            <input type="number" {...register("session", { required: true })} name='session' placeholder="Session" className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline" required />
                                            {errors.academy && <span className="text-red-600">Session Fee is required</span>}
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white">
                                            Email
                                        </label>
                                        <input type="email" {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, })} name="email" placeholder="Email" className=" w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline" required />
                                        {errors.email && errors.email.type === "required" && (
                                            <span className="text-red-600">Email is required</span>
                                        )}
                                        {errors.email && errors.email.type === "pattern" && (
                                            <span className="text-red-600">Invalid email format</span>
                                        )}
                                    </div>
                                    <div className="mb-4">
                                        <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" >
                                            Password
                                        </label>
                                        <input type="password" {...register("password", {
                                            required: true, minLength: 6, maxLength: 20,
                                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                        })} name="password" placeholder="password" className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white rounded shadow appearance-none focus:outline-none focus:shadow-outline" required />
                                        {errors.password?.type === "required" && <p className="text-red-600">Password is required</p>}
                                        {errors.password?.type === "minLength" && <p className="text-red-600">Password must be 6 character</p>}
                                        {errors.password?.type === "maxLength" && <p className="text-red-600">Password must be less than 20 character</p>}
                                        {errors.password?.type === "pattern" && <p className="text-red-600">Password must have one uppercase one lowercase, one number and one special character </p>}
                                    </div>
                                    <div className="mb-6 text-center">
                                        <button
                                            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                                            type="button"
                                        >
                                            Register Account
                                        </button>
                                    </div>
                                    <hr className="mb-6 border-t" />
                                    <div className="text-center">
                                        <a className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                                            href="#">
                                            Forgot Password?
                                        </a>
                                    </div>
                                    <div className="text-center">
                                        <p className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800">Already have an account? <Link to="/login">Log In</Link></p>
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