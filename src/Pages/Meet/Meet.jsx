import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Prescription from "../../Components/Prescription/Prescription";
import { useQuery } from "@tanstack/react-query";
import useDoctor from "../../Hooks/useDoctor";

const Meet = () => {
  const [currentUser, setCurrentUser] = useState("");

  const { meetId } = useParams();
  const user = useSelector((state) => state.auth.user);
  const axios = useAxiosPublic();
  const [isDoctor, isDoctorLoading] = useDoctor();
  useEffect(() => {
    axios.get(`/users/${user?.email}`).then((res) => setCurrentUser(res.data));
  }, [axios, user?.email]);

  const { data: appointments = [] } = useQuery({
    queryKey: ["appointments"],
    queryFn: async () => {
      const res = await axios.get(`/appointments`);
      return res.data;
    },
  });

  const userInfo = appointments.find((data) => data.meetingId === meetId);
  console.log(userInfo);
  const userId = currentUser[0]?._id;
  const userName = currentUser[0]?.name;

  // console.log(userId, userName)

  const myMeeting = async (element) => {
    const appID = parseInt(import.meta.env.VITE_APP_ID);
    const serverSecret = import.meta.env.VITE_SERVER_SECRET;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      meetId,
      userId,
      userName
    );
    const zc = ZegoUIKitPrebuilt.create(kitToken);

    zc.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
    });
  };
  // console.log(currentUser[0]._id)
  if (isDoctorLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-dots loading-lg "></span>
      </div>
    );
  }
  //   console.log(isDoctor);
  return (
    <div className="h-screen flex px-6 lg:mt-16 mt-40 lg:py-20 gap-6">
      <div
        className="lg:w-fit relative w-full md:w-full mx-auto h-fit"
        ref={myMeeting}
      ></div>
      {isDoctor ? (
        <div className="absolute right-5 -mt-14">
          <div className="dropdown dropdown-end z-50">
            <div tabIndex={0} role="button" className="btn btn-info text-white">
              Make Prescription
            </div>
            <div
              tabIndex={0}
              className="dropdown-content z-[1] card card-compact w-auto shadow text-primary-content"
            >
              <div className="card-body">
                <Prescription
                  doctorName={userInfo?.doctorName}
                  doctorEmail={userInfo?.doctorEmail}
                  patientEmail={userInfo?.patientEmail}
                  patientNameDef={userInfo?.patientName}
                  meetId={meetId}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Meet;
