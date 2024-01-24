import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { FaRegStar } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";


const BestDoctor = () => {


    const [doctorList, setDoctorList] = useState([]);

    useEffect(() => {
        fetch('https://chikitsha-hub-server.vercel.app/doctors/')
            .then(res => res.json())
            .then(data => setDoctorList(data))
    }, []);

    const sortedDoctors = [...doctorList].sort((a, b) => b.rating - a.rating);


    return (
        <div className='max-w-6xl mx-auto my-24'>
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-black text-center mb-6'>Best Doctors</h2>
            <Swiper
                breakpoints={{
                    425: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    }
                }}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{ delay: 1500, disableOnInteraction: false }}
                modules={[FreeMode, Pagination, Autoplay]}
                className="mySwiper"
            >
                {
                    sortedDoctors.slice(0, 6).map(doctor => <SwiperSlide className="px-6 py-10" key={doctor._id}>
                        <div className="border-2 rounded-xl hover:border-[#409bd4] pb-6">
                            <img className='w-full rounded-t-xl' src={doctor.img} alt="" />
                            <div className="flex justify-between items-center px-3 mt-6">
                                <div className="">
                                    <h5 className='text-xl font-medium'>{doctor.name}</h5>
                                    <p className="text-sm text-gray-500 mt-1">{doctor.category}</p>
                                </div>
                                <div className="p-2 bg-orange-400 rounded-xl text-white font-medium flex gap-2 items-center">
                                    <FaRegStar className=""/>
                                    {doctor.rating}
                                </div>
                            </div>
                            <div className="flex gap-2 items-center text-gray-500 px-3 mt-4">
                                    <FaLocationArrow className=""/>
                                    {doctor.location}
                                </div>
                        </div>
                    </SwiperSlide>)
                }
                <div className="mb-10"></div>

            </Swiper>
        </div>
    );
};

export default BestDoctor;