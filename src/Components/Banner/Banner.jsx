import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
// import heroImg from "../../assets/images/hero.png";

const Banner = () => {
  return (
    <div>
      <div className="w-full lg:py-28 py-32 md:py-24">
        <div className="lg:flex items-center gap-20 max-w-6xl mx-auto px-6">
          <div className="w-full lg:text-left text-center">
            <h4 className="font-bold mb-1 ">
              Revolutionizing Healthcare <span>Management</span>
            </h4>
            <h1 className="font-bold lg:text-5xl md:text-4xl text-3xl">
              Meet <span className="text-[#409ad4]">Your Health</span> Heroes
            </h1>
            <p className="font-semibold mt-6">
              Empower your medical practice with our cutting-edge Doctor
              Management System, designed to streamline operations, enhance
              patient care, and revolutionize the way you manage your healthcare
              professionals.
            </p>
            <div className="flex md:justify-start justify-center">
              <Link to='/dashboard'>
                <button className="flex items-center relative w-32 md:mx-auto lg:mx-0 border-2 border-[#409bd4] text-[#409bd4] px-4 py-2 rounded-full group mt-6">
                  <span>Get Start</span>
                  <span className="absolute w-1/6 right-3 group-hover:w-5/6 box-content duration-300 flex justify-center bg-white rounded-full">
                    <FaArrowRightLong className="h-10" />
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full">
            {/* <img src="https://i.ibb.co/f8kmdhY/hero.png" alt="" /> */}
            <img src="https://i.ibb.co/xzvTqTm/herOne.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
