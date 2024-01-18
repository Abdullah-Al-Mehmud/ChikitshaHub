import { MdKeyboardArrowRight } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";

const AboutUs = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-5 max-w-6xl mx-auto">
            {/* 1st image */}
            <div className='flex items-center justify-center min-h-screen px-2 lg:px-0'>
                <div className="overflow-hidden aspect-video cursor-pointer rounded-xl relative group">
                    <div className="rounded-xl z-1 opacity-0 group-hover:opacity-100 transition duration-1000 ease-in-out cursor-pointer absolute bg-white h-full flex items-end">
                        <div>
                            <div className=" p-4 space-y-3 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-10 pb-10 transform transition duration-500 ease-in-out">
                                <div className="font-bold text-4xl">Mission</div>
                                <ul className="opacity-60 space-y-3">
                                    <li className="text-2xl"><MdKeyboardArrowRight className="inline text-2xl" /> Important the health and well-being of the population we serve</li>
                                    <li className="text-2xl"><MdKeyboardArrowRight className="inline text-2xl" />Provide accessible and affordable health services through advanced technology</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="absolute text-white font-bold backdrop-brightness-50 w-full h-full flex justify-center items-center hover:backdrop-brightness-100 group-hover:hidden">
                        <h1 className="text-3xl">Mission <BsArrowRight className="ml-10 mt-1"/></h1>
                    </div>
                    <img
                        alt=""
                        className="object-cover w-full aspect-square"
                        src="https://i.ibb.co/wCVkDcD/doctor-bg.webp" />
                </div>
            </div>
            {/* 2nd image */}
            <div className='flex items-center justify-center min-h-screen px-2 lg:px-0'>
                <div className="overflow-hidden aspect-video cursor-pointer rounded-xl relative group">
                    <div className="rounded-xl z-1 opacity-0 group-hover:opacity-100 transition duration-1000 ease-in-out cursor-pointer absolute bg-white h-full flex items-end">
                        <div>
                            <div className=" p-4 space-y-3 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-10 pb-10 transform transition duration-500 ease-in-out">
                                <div className="font-bold text-4xl">Vision</div>
                                <ul className="opacity-60 space-y-3">
                                    <li className="text-2xl"><MdKeyboardArrowRight className="inline text-2xl" />Be The champion of telehealth in the selected developing markets</li>
                                    <li className="text-2xl"><MdKeyboardArrowRight className="inline text-2xl" />Focus on both high-volume medical assessments and the biggest health issues</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="absolute text-white font-bold backdrop-brightness-50 w-full h-full flex justify-center items-center hover:backdrop-brightness-100 group-hover:hidden">
                        <h1 className="text-3xl">Vision <BsArrowRight className="ml-9 mt-1"/></h1>
                    </div>
                    <img
                        alt=""
                        className="object-cover w-full aspect-square"
                        src="https://i.ibb.co/tHCsMY2/doctor-bg2.webp" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;