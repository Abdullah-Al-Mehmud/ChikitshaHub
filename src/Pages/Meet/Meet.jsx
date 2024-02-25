import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Meet = () => {
  const [currentUser, setCurrentUser] = useState("");

  const { meetId } = useParams();
  const user = useSelector((state) => state.auth.user);
  const axios = useAxiosPublic();
  useEffect(() => {
    axios.get(`/users/${user?.email}`).then((res) => setCurrentUser(res.data));
  }, [axios, user?.email]);

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

  return (
    <div className="max-w-6xl mx-auto px-6 mt-16 lg:py-20">
      <div ref={myMeeting}></div>
    </div>
  );
};

export default Meet;
