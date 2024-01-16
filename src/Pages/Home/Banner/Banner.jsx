// import moduleName from '../../../assets/images/banner.jpg';
const Banner = () => {
  return (
    <div className="bg-[url('./assets/images/banner2.jpg')] h-screen bg-no-repeat bg-cover flex items-center ">
      <div className="mt-10 pl-20 text-[#ffffffea] w-full">
        <h1 className="font-bold  text-5xl">
          Meet <span className="text-[#409ad4]">Your Health</span> Heroes
        </h1>
        <h2 className="font-bold text-4xl mt-4 ">
          Revolutionizing Healthcare <span>Management</span>
        </h2>
        <p className="font-medium mt-4 ">
          Empower your medical practice with our cutting-edge Doctor Management
          System, designed to streamline operations, enhance patient care, and
          revolutionize the way you manage your healthcare professionals.
          Experience a new era of efficiency and precision in healthcare
          administration.
        </p>

        <button className="flex mt-5 items-center relative w-36 border-2 border-[#409bd4] text-[#409bd4] p-4 rounded-full group">
          <span>Get Start</span>
          <span className="absolute w-1/6 right-3 group-hover:w-5/6 box-content duration-300 flex justify-center bg-white rounded-full">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-10"
              xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M4 12H20M20 12L14 6M20 12L14 18"
                  stroke="#0ea5e9"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
              </g>
            </svg>
          </span>
        </button>
      </div>
      <div className="w-full"></div>
    </div>
  );
};

export default Banner;
