import Rating from "react-rating";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaQuoteRight, FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

const Testimonials = () => {
  // const [reviewData, setReviewData] = useState();

  const { data: reviewData = [], refetch } = useQuery({
    queryKey: ["reviewData"],
    queryFn: async () => {
      const res = await axios.get('/review');
      return res.data;
    },
  });

  const user = useSelector((state) => state.auth.user);
  const { photoURL, email } = user || {};


  const { register, handleSubmit } = useForm();
  const [ratings, setRatings] = useState(null);

  const axios = useAxiosPublic();

  const onSubmit = async (data) => {
    const { name, details, rating } = data;
    const newReview = {
      name,
      email,
      rating,
      details,
      img: photoURL
    };
    try {
      const postResponse = await axios.post("/review", newReview);
      if (postResponse.data.success) {
        Swal.fire({
          title: "Good job!",
          text: "Your Review send Successfully.",
          icon: "success",
        });

        await refetch();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto my-24 px-6 py-10">
      <h2 className="text-4xl md:text-3xl lg:text-4xl font-bold text-center mb-6">
        Testimonials
      </h2>
      <div className="flex gap-10 items-center flex-col lg:flex-row">
      <Swiper
        breakpoints={{
            slidesPerView: 1,
            spaceBetween: 10,
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper flex-1 w-full">
        {reviewData?.map((review) => (
          <SwiperSlide className="" key={review.name}>
            <div className="border-2 p-4 w-full rounded-xl hover:border-[#409bd4] flex">
              <div className="px-4 py-8 bg-base-200 rounded-xl text-start w-full">
                <Rating
                  initialRating={review.rating}
                  emptySymbol={
                    <AiOutlineStar className="text-orange-300 w-8 h-8" />
                  }
                  fullSymbol={
                    <AiFillStar className="text-orange-300 w-8 h-8" />
                  }></Rating>
                <p className="text-lg text-[#222e48] my-6 text-start min-h-[100px]">
                  {review.details}
                </p>
                <div className="flex flex-col-reverse md:flex-row items-center justify-between">
                  <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="avatar">
                      <div className="w-16 rounded-full">
                        <img src={review.img} />
                      </div>
                    </div>
                    <div className="text-start text-[#222e48]">
                      <h4 className="text-xl font-semibold mb-2">
                        {review.name}
                      </h4>
                      <h6 className="font-medium">{review.email}</h6>
                    </div>
                  </div>
                  <div>
                    <FaQuoteRight className="w-14 h-14 text-base-300" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="mb-10"></div>
      </Swiper>
      <form onSubmit={handleSubmit(onSubmit)} className="p-6 bg-base-200 rounded-lg flex-1 w-full">
                <h2 className="block text-2xl font-bold text-gray-600 mb-10">Add Review</h2>
                <div className="flex gap-6 items-center">
                  <div className="mb-4 w-1/2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-bold text-gray-600"
                    >
                      Your Name:
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register("name")}
                      className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>
                  <div className="mb-4 ">
                    <label
                      htmlFor="rating"
                      className=" block text-sm font-bold text-gray-600 mr-2"
                    >
                      Your Rating:
                    </label>
                    <div className="flex flex-row">
                      {[...Array(5)].map((star, index) => {
                        const currentRating = index + 1;
                        return (
                          <label key={index}>
                            <input
                              className="hidden "
                              type="radio"
                              id="rating"
                              value={currentRating}
                              onClick={() => setRatings(currentRating)}
                              {...register("rating")}
                              required
                            />
                            <FaStar
                              color={
                                currentRating <= ratings ? "#ffc107" : "#808080"
                              }
                              className="flex cursor-pointer mr-2"
                              title={`Your Rating: ${currentRating}`}
                              size={30}
                            />
                          </label>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="details"
                    className="block text-sm font-bold text-gray-600"
                  >
                    Your Review:
                  </label>
                  <textarea
                    id="details"
                    {...register("details")}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="flex items-center relative w-28 border-2 border-[#409bd4] text-[#409bd4] px-4 py-2 rounded-full group mt-4 font-semibold"
                  >
                    <span>Review</span>
                    <span className="absolute w-1/6 right-3 group-hover:w-5/6 box-content duration-300 flex justify-center bg-base-200 rounded-full">
                      <FaArrowRightLong className="h-10" />
                    </span>
                  </button>
                </div>
              </form>
      </div>
    </div>
  );
};

export default Testimonials;
