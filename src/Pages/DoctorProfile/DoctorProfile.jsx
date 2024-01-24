import { useEffect, useState } from "react";
import { FaVideo } from "react-icons/fa";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';



const DoctorProfile = () => {

    const [doctorList, setDoctorList] = useState([]);

    useEffect(() => {
        fetch('../../../public/DoctorList.json')
            .then(res => res.json())
            .then(data => setDoctorList(data))
    }, []);

    const doctor = doctorList.find(list => list.id === 1)

    console.log(doctor)
    return (
        <div>
            <div className="bg-[url('https://i.ibb.co/qYS91BQ/banner2.jpg')] bg-no-repeat bg-cover">
                <div className="w-full bg-black bg-opacity-70 lg:pb-40 lg:pt-36 md:pb-28 md:pt-24 pb-20 pt-16">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="pt-10 text-[#ffffffea] w-full lg:text-left text-center">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Doctor Profile</h2>
                            <p className="font-medium text-white mt-1">Home &gt; Specialties &gt; Doctors &gt; <span className="text-[#409bd4]">Doctor Profile</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <img src={doctor.img} alt="" className="w-28 h-28 rounded-lg" />
                        <div>
                            <h4 className="text-xl font-semibold">{doctor.name}</h4>
                            <p className="text-sm font-semibold text-gray-600 my-1">{doctor.specialties}</p>
                            <p className="text-sm font-medium text-gray-600 flex gap-2">{doctor.specializations[0]}, {doctor.specializations[1]}</p>
                            <h4 className="text-lg font-medium text-gray-600 mt-2">Working at <span className="text-lg font-semibold text-black">{doctor.location}</span></h4>
                        </div>
                    </div>
                    <div className="text-center">
                        <h4 className="text-xl font-bold">Consultation Fee</h4>
                        <h3 className="text-2xl font-bold text-[#409bd4] my-2">$ {doctor.fee} <span className="text-sm font-bold text-gray-600">(incl. VAT)</span></h3>
                        <button className="flex items-center relative w-52 mx-auto border-2 border-green-800 text-green-800 px-4 py-2 rounded-full group mt-4 text-lg font-semibold"><span>See Doctor Now</span><span className="absolute w-1/6 right-3 group-hover:w-11/12 box-content duration-300 flex justify-center bg-white rounded-full">
                            <FaVideo className='h-10' />
                        </span></button>
                    </div>
                </div>
                <div className="flex items-center gap-6 my-10">
                    <h4 className="text-xl font-normal text-gray-600">Total Experience <br /> <span className="text-black font-semibold">{doctor.experience.year} + Years</span></h4>
                    <h4 className="text-xl font-normal text-gray-600">BMDC Number <br /> <span className="text-black font-semibold">{doctor.experience.year} + Years</span></h4>
                    <h4 className="text-xl font-normal text-gray-600">Joined ChikitshaHub <br /> <span className="text-black font-semibold">{doctor.experience.year} + Years</span></h4>
                </div>

                <Tabs>
                    <TabList>
                        <Tab>Info</Tab>
                        <Tab>Experience</Tab>
                        <Tab>Review</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>Any content 1</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 3</h2>
                    </TabPanel>
                </Tabs>
            </div>



        </div>
    );
};

export default DoctorProfile;