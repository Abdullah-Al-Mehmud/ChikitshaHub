import { useState } from "react";

const serProfile = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className=" lg:flex h-auto mt-20
        ">
            <div className=" h-auto w-80">
                {/* colum -1 */}
                <div className="bg-[#f1f0f2] relative   py-10 text-main-blue-50 rounded-lg  px-20 h-auto">
                    <div className="avatar flex justify-center">
                        <div className="w-36 rounded-full mt-5 ">
                            <img src='https://i.ibb.co/hCRqh0K/360-F-229758328-7x8jw-Cwjt-BMm-C6rg-Fz-LFh-Zo-Ep-Lob-B6-L8.jpg' />
                        </div>
                    </div>
                    <div className="mt-10">
                        <div className=" flex items-center justify-center ">
                            <p className="text-sm text-black font-bold">
                                {" "}
                                Name :{" "}
                            </p>
                            <p className="text-sm text-black font-bold ml-2">Foysal</p>

                        </div>
                        <div className="flex items-center justify-center ">
                            <p className="text-sm text-black font-bold">
                                {" "}
                                Blood Group :{" "}
                            </p>
                            <p className="text-sm text-black font-bold ml-2"> Name</p>

                        </div>
                        <div className=" flex items-center justify-center ">
                            <p className="text-sm text-black font-bold">
                                {" "}
                                Location :{" "}
                            </p>
                            <p className="text-sm text-black font-bold ml-2"> Name</p>

                        </div>
                        <div className=" flex items-center justify-center ">
                            <p className="text-sm text-black font-bold">
                                {" "}
                                Birth Date :{" "}
                            </p>
                            <p className="text-sm text-black font-bold ml-2"> Name</p>

                        </div>


                        <div className="flex justify-center mt-6">
                            <button className="btn">
                                Update Profile
                            </button>
                        </div>
                    </div>

                </div>
                {/* colum -2 */}
            </div>
            <div className="flex-1 bg-[#e3e1e6]">
                <div className="grid lg:grid-cols-4  mx-5 gap-5 ">
                    {/* modal */}
                    <div>
                <button onClick={() => setOpenModal(true)} className="">
                <div className="overflow-hidden   py-6 sm:py-12">
                        <div
                            className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                            <span className="absolute top-10 z-0 h-20 w-20 left-10 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
                            <div className="relative z-10 mx-auto max-w-md">
                                
                                <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-white">
                                  <img className="text-center" src="https://i.ibb.co/0MVztd0/graph-01.png" alt="" />
                                </span>
                                <div
                                    className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                    <p className="text-xl font-bold">BMI Status</p>
                                </div>
                                <div className="pt-5 text-sm leading-7">
                                    <p>
                                        <a href="#" className="text-sky-500 transition-all duration-300 group-hover:text-white">Last Update 6d
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </button>
                <div onClick={() => setOpenModal(false)} className={`fixed flex justify-center items-center z-[100] ${openModal ? 'visible opacity-1' : 'invisible opacity-0'} inset-0 w-full h-full backdrop-blur-sm bg-black/20 duration-100`}>
                    <div onClick={(e_) => e_.stopPropagation()} className={`absolute max-w-md p-4 text-center bg-white drop-shadow-2xl rounded-lg ${openModal ? 'scale-1 opacity-1 duration-300' : 'scale-0 opacity-0 duration-150'}`}>
                        <h1 className="p-2 text-3xl font-semibold">Welcome to NavigateUI!</h1>
                        <p className="mb-3">Elevate your React projects with beautifully crafted components designed for TailwindCSS.</p>
                        <button onClick={() => setOpenModal(false)} className="text-white me-2 bg-[#16c55c] px-6 py-2 rounded-full">Ok</button>
                        <button onClick={() => setOpenModal(false)} className="text-[#c51636] hover:text-white hover:bg-[#c51636] px-6 py-2 border border-[#c51636] rounded-full">Cancel</button>
                    </div>
                </div>
            </div>
                    {/* card-1 */}

                    
                    {/* card-2 */}
                    <div className="overflow-hidden   py-6 sm:py-12">
                       
                        <div
                            className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
                            <div className="relative z-10 mx-auto max-w-md">
                                
                                <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-white">
                                  <img className="text-center" src="https://i.ibb.co/16VsTnk/graph-02.png" alt="" />
                                </span>
                                <div
                                    className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                    <p className="text-xl font-bold">Heard Rate</p>
                                </div>
                                <div className="pt-5 text-sm leading-7">
                                    <p>
                                        <a href="#" className="text-sky-500 transition-all duration-300 group-hover:text-white">Last Update 2d
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                     {/* card-3 */}
                     <div className="overflow-hidden   py-6 sm:py-12">
                       
                       <div
                           className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                           <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
                           <div className="relative z-10 mx-auto max-w-md">
                               
                               <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-white">
                                 <img className="text-center text-red-500 w-1/2 " src="https://i.ibb.co/120WsFn/graph-03.png" alt="" />
                               </span>
                               <div
                                    className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                    <p className="text-xl font-bold">FBC Status</p>
                                </div>
                                <div className="pt-5 text-sm leading-7">
                                    <p>
                                        <a href="#" className="text-sky-500 transition-all duration-300 group-hover:text-white">Last Update 3d
                                        </a>
                                    </p>
                                </div>
                           </div>
                       </div>
                   </div>
                     {/* card-4 */}
                     <div className="overflow-hidden   py-6 sm:py-12">
                       
                       <div
                           className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                           <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
                           <div className="relative z-10 mx-auto max-w-md">
                               
                               <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-white">
                                 <img  className="text-center " src="https://i.ibb.co/yYrN464/graph-04.png" alt="" />
                               </span>
                               <div
                                    className=" pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                    <p className="text-xl font-bold whitespace-nowrap">Weight Status</p>
                                </div>
                                <div className="pt-5 text-sm leading-7">
                                    <p>
                                        <a href="#" className="text-sky-500 transition-all duration-300 group-hover:text-white">Last Update 5d
                                        </a>
                                    </p>
                                </div>
                           </div>
                       </div>
                   </div>

                </div>
            </div>
        </div>
    )
}
export default serProfile;