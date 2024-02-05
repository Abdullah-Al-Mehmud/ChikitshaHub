import { MdKeyboardArrowRight } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";

const AboutUs = () => {
  return (
    <div className="py-6">
      <div className="flex flex-col md:flex-row gap-5 mx-auto max-w-6xl px-6 py-16 lg:py-20">
        {/* 1st image */}
        <div className="flex items-center justify-center px-2 lg:px-0">
          <div className="overflow-hidden aspect-video cursor-pointer rounded-xl relative group">
            <div className="rounded-xl z-1 opacity-0 group-hover:opacity-100 transition duration-1000 ease-in-out cursor-pointer absolute bg-white h-full flex items-end border-2 border-[#409bd4]">
              <div>
                <div className=" p-4 space-y-3 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-10 pb-10 transform transition duration-500 ease-in-out">
                  <div className="font-bold text-4xl">Mission</div>
                  <ul className="opacity-60 space-y-3">
                    <li className="text-2xl">
                      <MdKeyboardArrowRight className="inline text-2xl" />{" "}
                      Important the health and well-being of the population we
                      serve
                    </li>
                    <li className="text-2xl">
                      <MdKeyboardArrowRight className="inline text-2xl" />
                      Provide accessible and affordable health services through
                      advanced technology
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="absolute text-white font-bold backdrop-brightness-50 w-full h-full flex justify-center items-center hover:backdrop-brightness-100 group-hover:hidden">
              <h1 className="text-3xl">
                Mission <BsArrowRight className="ml-10 mt-1" />
              </h1>
            </div>
            <img
              alt=""
              className="object-cover w-full aspect-square"
              src="https://i.ibb.co/wCVkDcD/doctor-bg.webp"
            />
          </div>
        </div>
        {/* 2nd image */}
        <div className="flex items-center justify-center px-2 lg:px-0">
          <div className="overflow-hidden aspect-video cursor-pointer rounded-xl relative group">
            <div className="rounded-xl z-1 opacity-0 group-hover:opacity-100 transition duration-1000 ease-in-out cursor-pointer absolute bg-white h-full flex items-end border-2 border-[#409bd4]">
              <div>
                <div className=" p-4 space-y-3 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-10 pb-10 transform transition duration-500 ease-in-out">
                  <div className="font-bold text-4xl">Vision</div>
                  <ul className="opacity-60 space-y-3">
                    <li className="text-2xl">
                      <MdKeyboardArrowRight className="inline text-2xl" />
                      Be The champion of telehealth in the selected developing
                      markets
                    </li>
                    <li className="text-2xl">
                      <MdKeyboardArrowRight className="inline text-2xl" />
                      Focus on both high-volume medical assessments and the
                      biggest health issues
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="absolute text-white font-bold backdrop-brightness-50 w-full h-full flex justify-center items-center hover:backdrop-brightness-100 group-hover:hidden">
              <h1 className="text-3xl">
                Vision <BsArrowRight className="ml-9 mt-1" />
              </h1>
            </div>
            <img
              alt=""
              className="object-cover w-full aspect-square"
              src="https://i.ibb.co/tHCsMY2/doctor-bg2.webp"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-6 pb-16 lg:pb-20 text-lg font-medium text-gray-600">
        <p>
          Welcome to Chikitshahub, your trusted destination for hassle-free
          online doctor appointments. At Chikitshahub, we believe that your
          health is a priority, and we&#39;ve crafted a platform that ensures
          convenient access to quality healthcare from the comfort of your home.
        </p>
        <br />
        <p>
          Our mission is simple – to revolutionize the way you book and
          experience doctor appointments. No more waiting in lines or dealing
          with complicated scheduling. Chikitshahub brings you a seamless online
          platform that connects you with experienced healthcare professionals
          across various specialties.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
