import { useState } from "react";
import { useSelector } from "react-redux";
import useAxiosPrivet from "../../Hooks/useAxiosPrivet";
import Swal from "sweetalert2";
import moment from "moment";

const UserProfile = () => {
  const [openModal, setOpenModal] = useState(false);
  const axiosPrivate = useAxiosPrivet();
  const [bmiResult, setBmiResult] = useState();
  const user = useSelector((state) => state.auth.user);
  const { email } = user || {};
  const url = `/bmi?email=${email}`;
  axiosPrivate.get(url).then((res) => {
    console.log(res.data);
    setBmiResult(res.data);
    if (res.data.success) {
      console.log(res.data);
      Swal.fire({
        title: "Good job!",
        text: "Your BMI is Added!",
        icon: "success",
      });
    }
  });
  // console.log(bmiResult);
  return (
    <>
      <div className=" lg:flex h-auto mt-20">
        <div className="flex-1 bg-[#e3e1e6]">
          <div className="grid lg:grid-cols-4  mx-5 gap-5 ">
            <div className="overflow-hidden w-full py-6 sm:py-12">
              <div>
                <button onClick={() => setOpenModal(true)} className="w-full">
                  <div>
                    <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                      <span className="absolute top-10 z-0 h-20 w-20 left-10 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
                      <div className="relative z-10 mx-auto max-w-md">
                        <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-white">
                          <img
                            className="text-center"
                            src="https://i.ibb.co/0MVztd0/graph-01.png"
                            alt=""
                          />
                        </span>
                        <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                          <p className="text-xl font-bold text-left">
                            BMI Status
                          </p>
                        </div>
                        <div className="pt-5 text-sm leading-7 text-left">
                          <p>
                            <a
                              href="#"
                              className="text-sky-500 transition-all duration-300 group-hover:text-white text-left"
                            >
                              Last Update 6d
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
                <div
                  onClick={() => setOpenModal(false)}
                  className={`fixed flex justify-center items-center z-[100] ${
                    openModal ? "visible opacity-1" : "invisible opacity-0"
                  } inset-0 w-full h-full backdrop-blur-sm bg-black/20 duration-100`}
                >
                  <div
                    onClick={(e_) => e_.stopPropagation()}
                    className={`absolute max-w-md p-4 text-center bg-white drop-shadow-2xl rounded-lg ${
                      openModal
                        ? "scale-1 opacity-1 duration-300"
                        : "scale-0 opacity-0 duration-150"
                    }`}
                  >
                    <h1 className="p-2 text-3xl font-semibold">
                      Welcome to ChikitshaHub
                    </h1>
                    {/* bmiResult */}
                    <div>
                      {bmiResult?.map((dd) => (
                        <div key={dd._id}>
                          <h1>
                            {moment().format("MMM Do YY")} : BMI result :
                            {dd.bmiResult}{" "}
                          </h1>
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={() => setOpenModal(false)}
                      className="text-white me-2 bg-[#16c55c] px-6 py-2 rounded-full"
                    >
                      Ok
                    </button>
                    <button
                      onClick={() => setOpenModal(false)}
                      className="text-[#c51636] hover:text-white hover:bg-[#c51636] px-6 py-2 border border-[#c51636] rounded-full"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden w-full py-6 sm:py-12">
              <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
                <div className="relative z-10 mx-auto max-w-md">
                  <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-white">
                    <img
                      className="text-center"
                      src="https://i.ibb.co/16VsTnk/graph-02.png"
                      alt=""
                    />
                  </span>
                  <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                    <p className="text-xl font-bold">Heard Rate</p>
                  </div>
                  <div className="pt-5 text-sm leading-7">
                    <p>
                      <a
                        href="#"
                        className="text-sky-500 transition-all duration-300 group-hover:text-white"
                      >
                        Last Update 2d
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden w-full   py-6 sm:py-12">
              <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
                <div className="relative z-10 mx-auto max-w-md">
                  <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-white">
                    <img
                      className="text-center text-red-500 w-1/2 "
                      src="https://i.ibb.co/120WsFn/graph-03.png"
                      alt=""
                    />
                  </span>
                  <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                    <p className="text-xl font-bold">FBC Status</p>
                  </div>
                  <div className="pt-5 text-sm leading-7">
                    <p>
                      <a
                        href="#"
                        className="text-sky-500 transition-all duration-300 group-hover:text-white"
                      >
                        Last Update 3d
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden w-full   py-6 sm:py-12">
              <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
                <div className="relative z-10 mx-auto max-w-md">
                  <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-white">
                    <img
                      className="text-center "
                      src="https://i.ibb.co/yYrN464/graph-04.png"
                      alt=""
                    />
                  </span>
                  <div className=" pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                    <p className="text-xl font-bold whitespace-nowrap">
                      Weight Status
                    </p>
                  </div>
                  <div className="pt-5 text-sm leading-7">
                    <p>
                      <a
                        href="#"
                        className="text-sky-500 transition-all duration-300 group-hover:text-white"
                      >
                        Last Update 5d
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserProfile;
