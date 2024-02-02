import { FaArrowRightLong } from "react-icons/fa6";


const Banner = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/qYS91BQ/banner2.jpg')] bg-no-repeat bg-cover">
            <div className="w-full bg-black bg-opacity-70 lg:pb-40 lg:pt-36 md:pb-28 md:pt-24 pb-20 pt-16">
            <div className="lg:flex items-center max-w-6xl mx-auto px-6">
                <div className="pt-10 text-[#ffffffea] w-full lg:text-left text-center">
                <h4 className="font-bold mb-1 text-white">
                        Revolutionizing Healthcare <span>Management</span>
                    </h4>
                    <h1 className="font-bold lg:text-5xl md:text-4xl text-3xl">
                        Meet <span className="text-[#409ad4]">Your Health</span> Heroes
                    </h1>
                    <p className="font-medium mt-6">
                        Empower your medical practice with our cutting-edge Doctor Management
                        System, designed to streamline operations, enhance patient care, and
                        revolutionize the way you manage your healthcare professionals.
                        Experience a new era of efficiency and precision in healthcare
                        administration.
                    </p>
                    <div className="flex md:justify-start justify-center">
                    <button className="flex items-center relative w-32 md:mx-auto lg:mx-0 border-2 border-[#409bd4] text-[#409bd4] px-4 py-2 rounded-full group mt-6"><span>Get Start</span><span className="absolute w-1/6 right-3 group-hover:w-5/6 box-content duration-300 flex justify-center bg-black rounded-full">
                <FaArrowRightLong className='h-10'/>
                </span></button>
                    </div>
                </div>
                <div className="w-full"></div>
            </div>
            <div>
                
            </div>
            </div>

        </div>
    );
};

export default Banner;