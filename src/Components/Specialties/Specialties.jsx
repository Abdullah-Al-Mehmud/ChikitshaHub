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
        <div className='max-w-6xl mx-auto'>
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
                    specialtiesData.slice(0, 6).map(category => <SwiperSlide className="px-6 py-10" key={category.id}>
                        <div className="border-2 p-4 rounded-xl">
                            <img src={category.img} alt="" />
                            <h5 className='text-xl font-medium text-center my-4'>{category.name}</h5>
                        </div>
                    </SwiperSlide>)
                }
                <div className="mb-10"></div>

            </Swiper>
        </div>
    );
};

export default Specialties;