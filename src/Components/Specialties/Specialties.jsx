import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

const Specialties = () => {


    const [specialtiesData, setSpecialtiesData] = useState([]);

    useEffect(() => {
        fetch('../../../public/specialtiesData.json')
            .then(res => res.json())
            .then(data => setSpecialtiesData(data))
    }, [])


    return (
        <div className='max-w-6xl mx-auto my-14'>
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-black text-center mb-6'>Specialties</h2>
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
                        slidesPerView: 4,
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
                    specialtiesData.slice(0, 6).map(category => <SwiperSlide className="px-6 py-10" key={category.id}>
                        <div className="border-2 px-4 py-8 rounded-xl hover:border-[#409bd4]">
                            <div className='bg-base-300 rounded-full w-fit mx-auto p-4'>
                                <img className='w-28 h-28 mx-auto p-4' src={category.img} alt="" />
                            </div>
                            <h5 className='text-xl font-medium text-center my-6 min-h-14'>{category.name}</h5>
                        </div>
                    </SwiperSlide>)
                }
                <div className="mb-10"></div>

            </Swiper>

            <button className="flex items-center relative w-28 mx-auto border-2 border-[#409bd4] text-[#409bd4] p-4 rounded-lg group mt-4"><span>See All</span><span className="absolute w-1/6 right-3 group-hover:w-5/6 box-content duration-300 flex justify-center bg-white rounded-lg">
                <FaArrowRightLong/>
                </span></button>
        </div>
    );
};

export default Specialties;