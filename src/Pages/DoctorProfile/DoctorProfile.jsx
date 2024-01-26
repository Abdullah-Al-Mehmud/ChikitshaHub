import { FaCalendarAlt, FaVideo } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import { useForm } from 'react-hook-form';
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaArrowRightLong } from "react-icons/fa6";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";


const DoctorProfile = () => {

    const [selectedDateTime, setSelectedDateTime] = useState(null);
    const doctor = useLoaderData();
    const bookedSlots = [];

    const isSlotAvailable = (date) => {
        const formattedDate = date.toISOString(); // Adjust the format based on your backend data
        return !bookedSlots.includes(formattedDate);
    };

    const filterUnavailableDates = (date) => {
        return isSlotAvailable(date);
    };

    const isTimeSlotDisabled = (time) => {
        const selectedDate = new Date(selectedDateTime);
        const selectedTime = new Date(selectedDate.setHours(time.getHours(), time.getMinutes()));

        return !isSlotAvailable(selectedTime);
    };


    const dateObject = new Date(doctor.joiningDate);
    const formattedDate = dateObject.toLocaleDateString();
    doctor.joiningDate = formattedDate;


    const { register, handleSubmit } = useForm({
        defaultValues: {
            name: '',
            rating: 5,
            comment: '',
        },
    });

    const onSubmit = (data) => {
        console.log('Submitted:', data);
    };

    const user = useSelector((state) => state.auth.user);
    const { displayName, email } = user || {};

    const axios = useAxiosPublic();

    const handleAppointment = (e) => {
        e.preventDefault();
        const appointment = e.target.appointment.value;

        const appointmentDetails = { doctor: doctor.name, doctorCode: doctor.doctorCode, passantName: displayName, passantEmail: email, appointmentTime: appointment }
        
        axios.post('/appointment', appointmentDetails)
        .then(res=>{
     if (res.data.success) {
        console.log(res.data);
        Swal.fire({
            title: "Good job!",
            text: "Your Appointment is Successfully Booked!",
            icon: "success"
          });
     }
    })

    }



    return (
        <div>
            <div className="bg-[url('https://i.ibb.co/qYS91BQ/banner2.jpg')] bg-no-repeat bg-cover">
                <div className="w-full bg-black bg-opacity-70 lg:pb-40 lg:pt-36 md:pb-28 md:pt-24 pb-20 pt-16">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="pt-10 text-[#ffffffea] w-full lg:text-left text-center">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Doctor Profile</h2>
                            <p className="font-medium text-white mt-1">Home &gt; Specialties &gt; Doctors &gt; <span className="text-[#409bd4]">Doctor Profile</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20">
                <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                    <div className="flex items-center gap-6">
                        <img src={doctor.img} alt="" className="w-32 h-32 rounded-lg" />
                        <div>
                            <h4 className="text-xl font-semibold">{doctor.name} <span className="text-sm font-semibold text-gray-600">({doctor.degrees[0]}, {doctor.degrees[1]})</span></h4>
                            <p className="text-sm font-semibold text-gray-600 my-2">{doctor.specialties}</p>
                            <p className="text-sm font-medium text-gray-600 flex gap-2">{doctor.specializations[0]}, {doctor.specializations[1]}</p>
                            <h4 className="text-lg font-medium text-gray-600 mt-2">Working at <span className="text-lg font-semibold text-black">{doctor.location}</span></h4>
                        </div>
                    </div>
                    <div className="text-center">
                        <h4 className="text-xl font-bold">Consultation Fee</h4>
                        <h3 className="text-2xl font-bold text-[#409bd4] my-2">$ {doctor.fee} <span className="text-sm font-bold text-gray-600">(incl. VAT)</span></h3>
                        <button className="flex items-center relative w-52 mx-auto border-2 border-green-800 text-green-800 px-4 py-2 rounded-full group mt-4 text-lg font-semibold mb-4"><span>See Doctor Now</span><span className="absolute w-1/6 right-3 group-hover:w-11/12 box-content duration-300 flex justify-center bg-white rounded-full">
                            <FaVideo className='h-10' />
                        </span></button>

                        <form className="relative" onSubmit={handleAppointment()}>
                            <DatePicker
                                selected={selectedDateTime}
                                onChange={(date) => setSelectedDateTime(date)}
                                showTimeSelect
                                timeIntervals={15}
                                dateFormat="MMMM d, yyyy h:mm aa"
                                minDate={new Date()}
                                filterDate={filterUnavailableDates}
                                timeCaption="Time"
                                disabledTimeIntervals={[{ after: new Date() }]}
                                name="appointment"
                                shouldDisableTime={(time) => isTimeSlotDisabled(time)}
                                placeholderText="Booking Appointment"
                                className="border-2 border-[#409bd4] text-[#409bd4] px-4 py-2 rounded-full group text-lg font-semibold focus:outline-none"
                            />

                            <button type="submit" className="mt-2 bg-[#409bd4] text-white px-4 py-2 rounded-full absolute right-2 top-0">
                                <FaCalendarAlt />
                            </button>
                        </form>




                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-6 my-10">
                    <h4 className="text-xl font-normal text-gray-600">Total Experience <br /> <span className="text-black font-semibold">{doctor.experience.year} + Years</span></h4>
                    <h4 className="text-xl font-normal text-gray-600">BMDC Number <br /> <span className="text-black font-semibold">{doctor.bmdcNumber}</span></h4>
                    <h4 className="text-xl font-normal text-gray-600">Joined ChikitshaHub <br /> <span className="text-black font-semibold">{doctor.joiningDate}</span></h4>
                </div>

                <Tabs>
                    <TabList>
                        <Tab>Info</Tab>
                        <Tab>Experience</Tab>
                        <Tab>Review</Tab>
                    </TabList>

                    <TabPanel>
                        <div className="flex flex-col md:flex-row gap-10 mt-8">
                            <div className="md:w-1/2">
                                <h2 className="text-xl font-bold">About {doctor.name}</h2>
                                <p className="mt-2 font-medium text-gray-600">{doctor.aboutDoctor}</p>
                            </div>
                            <div className="md:w-1/2">
                                <div>
                                    <h4 className="text-xl font-bold mb-2">Availability</h4>
                                    <div className="border-l-4 p-2 border-l-[#409bd4]">
                                        <h6 className="text-lg font-medium text-gray-600">Instant Consultation Time</h6>
                                        <h4 className="text-lg font-bold">{doctor.availability[0]}, {doctor.availability[1]}, {doctor.availability[2]}</h4>
                                    </div>
                                </div>
                                <div className="my-6">
                                    <h4 className="text-xl font-bold mb-2">At a Glance</h4>
                                    <div className="flex gap-4 mb-4">
                                        <div className="border-l-4 p-2 border-l-[#409bd4]">
                                            <h6 className="text-lg font-medium text-gray-600">Consultation Fee</h6>
                                            <h4 className="text-lg font-bold">$ {doctor.fee} <span className="text-sm font-bold text-gray-600">(Incl.VAT)</span></h4>
                                        </div>
                                        <div className="border-l-4 p-2 border-l-[#409bd4]">
                                            <h6 className="text-lg font-medium text-gray-600">Follow-Up Fee</h6>
                                            <h4 className="text-lg font-bold">$ {doctor.followUpFee} <span className="text-sm font-bold text-gray-600">(Incl.VAT)</span></h4>
                                            <p>(Within 14 Days)</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="border-l-4 p-2 border-l-[#409bd4]">
                                            <h6 className="text-lg font-medium text-gray-600">Doctor Code</h6>
                                            <h4 className="text-lg font-bold">{doctor.doctorCode}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="mt-8">
                            <h4 className="text-xl font-bold mb-2">{doctor.experience.hospitalName}</h4>
                            <div className="border-l-4 p-2 border-l-[#409bd4]">
                                <h6 className="text-lg font-medium text-gray-600">{doctor.experience.start} - {doctor.experience.end}</h6>
                                <h4 className="text-lg font-bold"> Experience: {doctor.experience.year} + Years</h4>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="mt-8">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                                        Your Name:
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        {...register('name')}
                                        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="rating" className="block text-sm font-medium text-gray-600">
                                        Rating:
                                    </label>
                                    <Rating
                                        initialRating={0}
                                        emptySymbol={<AiOutlineStar className="text-orange-300 w-8 h-8" />}
                                        fullSymbol={<AiFillStar className="text-orange-300 w-8 h-8" />}
                                    ></Rating>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="comment" className="block text-sm font-medium text-gray-600">
                                        Your Review:
                                    </label>
                                    <textarea
                                        id="comment"
                                        {...register('comment')}
                                        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <button type="submit" className="flex items-center relative w-28 border-2 border-[#409bd4] text-[#409bd4] px-4 py-2 rounded-full group mt-4"><span>Review</span><span className="absolute w-1/6 right-3 group-hover:w-5/6 box-content duration-300 flex justify-center bg-white rounded-full">
                                        <FaArrowRightLong className='h-10' />
                                    </span></button>
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