import { useEffect, useState } from "react";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Doctors = () => {
    const [range, setRange] = useState([0, 1000]);
    const [doctorList, setDoctorList] = useState([]);

    useEffect(() => {
        fetch('https://chikitsha-hub-server.vercel.app/doctors')
            .then(res => res.json())
            .then(data => setDoctorList(data))
    }, []);

    const handleSliderChange = (value) => {
        setRange(value);
    };


    return (
        <div>
            <div className="bg-[url('https://i.ibb.co/qYS91BQ/banner2.jpg')] bg-no-repeat bg-cover">
                <div className="w-full bg-black bg-opacity-70 lg:pb-40 lg:pt-36 md:pb-28 md:pt-24 pb-20 pt-16">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="pt-10 text-[#ffffffea] w-full lg:text-left text-center">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Doctors</h2>
                            <p className="font-medium text-white mt-1">Home &gt; Specialties &gt; <span className="text-[#409bd4]">Doctors</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6 max-w-6xl mx-auto px-6 py-16 lg:py-20">
                <div className="col-span-12 md:col-span-4">
                    <div className="flex justify-between mb-4 text-gray-600">
                        <h4 className="text-xl font-bold">Filters</h4>
                        <h4 className="text-xl font-bold">Reset</h4>
                    </div>
                    <h2 className="text-2xl font-bold mb-4 text-black">Consultation Fee</h2>

                    <p>Price Range: ${range[0]} - ${range[1]}</p>
                    <Slider
                        range
                        min={0}
                        max={1000}
                        value={range}
                        onChange={handleSliderChange}
                    />
                    <div className="mt-6">
                        <div className="flex gap-4 items-center mb-2">
                            <input type="checkbox" name="" id="" className="w-6 h-6" value='Online now' />
                            <label className="text-xl font-medium text-gray-700">Online Now</label>
                        </div>
                        <div className="flex gap-4 items-center mb-2">
                            <input type="checkbox" name="" id="" className="w-6 h-6" value='Available in next 2 hours' />
                            <label className="text-xl font-medium text-gray-700">Available in next 2 hours</label>
                        </div>
                        <div className="flex gap-4 items-center mb-2">
                            <input type="checkbox" name="" id="" className="w-6 h-6" value='Available today' />
                            <label className="text-xl font-medium text-gray-700">Available today</label>
                        </div>
                        <div className="flex gap-4 items-center mb-2">
                            <input type="checkbox" name="" id="" className="w-6 h-6" value='Female doctors only' />
                            <label className="text-xl font-medium text-gray-700">Female doctors only</label>
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold mt-16 mb-4 text-black">Sort By</h2>
                    <div className="mt-6">
                        <div className="flex gap-4 items-center mb-2">
                            <input type="checkbox" name="" id="" className="w-6 h-6" value='Popularity' />
                            <label className="text-xl font-medium text-gray-700">Popularity</label>
                        </div>
                        <div className="flex gap-4 items-center mb-2">
                            <input type="checkbox" name="" id="" className="w-6 h-6" value='Fees: low too high' />
                            <label className="text-xl font-medium text-gray-700">Fees: low too high</label>
                        </div>
                        <div className="flex gap-4 items-center mb-2">
                            <input type="checkbox" name="" id="" className="w-6 h-6" value='Fees: high too low' />
                            <label className="text-xl font-medium text-gray-700">Fees: high too low</label>
                        </div>
                        <div className="flex gap-4 items-center mb-2">
                            <input type="checkbox" name="" id="" className="w-6 h-6" value='Rating' />
                            <label className="text-xl font-medium text-gray-700">Rating</label>
                        </div>
                        <div className="flex gap-4 items-center mb-2">
                            <input type="checkbox" name="" id="" className="w-6 h-6" value='Experience' />
                            <label className="text-xl font-medium text-gray-700">Experience</label>
                        </div>
                        <div className="flex gap-4 items-center mb-2">
                            <input type="checkbox" name="" id="" className="w-6 h-6" value='Specialist First' />
                            <label className="text-xl font-medium text-gray-700">Specialist First</label>
                        </div>
                        <div className="flex gap-4 items-center mb-2">
                            <input type="checkbox" name="" id="" className="w-6 h-6" value='Ranking' />
                            <label className="text-xl font-medium text-gray-700">Ranking</label>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-8">
                    <div>
                        {
                            doctorList.map(doctor => <Link to={`/doctor/${doctor._id}`} key={doctor._id}>
                            <div className="p-6 border rounded-lg mb-6 shadow-xl hover:border-[#409bd4] hover:shadow-2xl">
                                <div className="flex items-center justify-between gap-2 flex-col md:flex-row">
                                    <div>
                                        <div className="flex items-center gap-6">
                                            <img src={doctor.img} alt="" className="w-28 h-28" />
                                            <div>
                                                <h4 className="text-xl font-semibold">{doctor.name}</h4>
                                                <p className="text-sm font-semibold text-gray-600">{doctor.specialties}</p>
                                            </div>
                                        </div>
                                        <div className="mt-6">
                                            <h4 className="text-lg font-medium text-gray-600">Working on: <span className="text-xl font-semibold text-black">{doctor.location}</span></h4>
                                            <div className="flex md: flex-col lg:flex-row lg:items-center gap-4 mt-2">
                                                <h4 className="text-lg font-medium text-gray-600">Experience: <span className="text-xl font-semibold text-black">{doctor.experience?.year} + Years</span></h4>
                                                <div className="flex gap-1 items-center">
                                                    <h4 className="text-lg font-medium text-gray-600 flex items-center gap-2">Rating: <Rating
                                                        initialRating={doctor.rating}
                                                        emptySymbol={<AiOutlineStar className="text-orange-300 w-6 h-6" />}
                                                        fullSymbol={<AiFillStar className="text-orange-300 w-6 h-6" />}
                                                    ></Rating></h4>
                                                    <p className="text-lg font-medium text-gray-600">({doctor.rating})</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-base-200 px-10 py-16 text-center w-full rounded-lg md:w-fit">
                                        
                                        <h4 className="text-2xl font-bold">$ {doctor.fee} <span className="text-sm font-normal text-gray-600">per <br /> consultation</span></h4>
                                        <p className="text-sm font-normal text-gray-600 mt-4">Follow Up: $ {doctor.followUpFee}</p>
                                        
                                    </div>
                                </div>
                            </div>
                            </Link>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctors;