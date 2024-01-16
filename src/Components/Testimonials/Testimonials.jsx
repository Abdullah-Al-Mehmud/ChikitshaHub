import Rating from 'react-rating';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaQuoteRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';

const Testimonials = () => {
    const [reviewData, setReviewData] = useState();

    useEffect(()=>{
        fetch('reviewData.json')
        .then(res => res.json())
        .then(data => setReviewData(data?.reviews))
    },[])

    // console.log(reviewData)

    return (
        <div className='max-w-6xl mx-auto my-14'>
            <h2 className="text-5xl font-bold text-center mb-5">Testimonials</h2>
            <Swiper
                breakpoints={{
                    425: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 2,
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
                    reviewData?.map(review => <SwiperSlide className="px-6 py-10" key={review.name}>
                        <div className="border-2 p-4 rounded-xl hover:border-black flex">
                            <div className="px-4 py-8 bg-base-200 rounded-xl text-start">
                                <Rating
                                    initialRating={review.rating}
                                    emptySymbol={<AiOutlineStar className="text-orange-300 w-8 h-8" />}
                                    fullSymbol={<AiFillStar className="text-orange-300 w-8 h-8" />}
                                ></Rating>
                                <p className="text-lg text-[#222e48] my-6 text-start min-h-[100px]">
                                    {review.details}
                                </p>
                                <div className="flex flex-col-reverse md:flex-row items-center justify-between">
                                    <div className="flex flex-col md:flex-row items-center gap-3">
                                        <div className="w-14 h-14">
                                            <img src={review.img} alt="" className="rounded-full " />
                                        </div>
                                        <div className="text-start text-[#222e48]">
                                            <h4 className="text-xl font-semibold mb-2">{review.name}</h4>
                                            <h6 className="font-medium">{review.email}</h6>
                                        </div>
                                    </div>
                                    <div>
                                        <FaQuoteRight className="w-14 h-14 text-base-300" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>)
                }
                <div className="mb-10"></div>

            </Swiper>
        </div>
    );
};

export default Testimonials;