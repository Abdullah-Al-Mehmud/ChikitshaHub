import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';

const Specialties = () => {


    const [specialtiesData, setSpecialtiesData] = useState([]);

    useEffect(() => {
        fetch('../../../public/specialtiesData.json')
            .then(res => res.json())
            .then(data => setSpecialtiesData(data))
    }, [])


    return (
        <div>
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
                    specialtiesData.slice(0, 6).map(loan => <SwiperSlide className="px-6 py-10" key={loan._id}>
                        <div className="border-2 p-4 rounded-xl">
                            <div className="px-4 py-8 bg-base-200 text-[#222e48] rounded-xl hover:text-white hover:bg-[#074c3e]">
                                <div className="h-20 w-20 mx-auto bg-white p-3 rounded-full mb-6">
                                    <img className="w-6 h-6" src={loan.icons} alt="" />
                                </div>
                                <h2 className="text-2xl font-bold hover:text-[#fcb650] cursor-pointer">{loan.title}</h2>
                                <p className="my-6 min-h-[96px]">{loan.description.length > 100 ? loan.description.slice(0, 100) + '...' : loan.description}</p>
                                {/* <Link to={`/service/details/${loan._id}`}>
                                    <button className="rounded-full bg-white p-3 text-[#074c3e] hover:bg-[#fcb650] hover:text-white">
                                        <MdNavigateNext className="w-6 h-6"/>
                                    </button>
                                </Link> */}
                            </div>
                        </div>
                    </SwiperSlide>)
                }
                <div className="mb-10"></div>

            </Swiper>
        </div>
    );
};

export default Specialties;