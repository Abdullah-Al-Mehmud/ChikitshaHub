import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const Meet = () => {

    const [currentUser, setCurrentUser] = useState('')
    const { meetId } = useParams();
    const user = useSelector((state) => state.auth.user);
    const axios = useAxiosPublic();
    useEffect(() => {
        axios.get(`/users/${user?.email}`)
            .then(res => setCurrentUser(res.data))
    }, [axios, user?.email])


    const userId = currentUser[0]?._id;
    const userName = currentUser[0]?.name;

    // console.log(userId, userName)


    const myMeeting = async () => {
        const appID = 1064521483;
        const serverSecret = "7215c500b6b837ab322dcdd397507095";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            meetId,
            userId,
            userName);
        const zc = ZegoUIKitPrebuilt.create(kitToken);

        zc.joinRoom({
            turnOnMicrophoneWhenJoining: true,
            turnOnCameraWhenJoining: true,
            showMyCameraToggleButton: true,
            showMyMicrophoneToggleButton: true,
            showAudioVideoSettingsButton: true,
            showScreenSharingButton: true,
            showTextChat: true,
            showUserList: true,
            maxUsers: 2,
            layout: "Auto",
            showLayoutButton: false,
            scenario: {
                mode: "OneONoneCall",
                config: {
                    role: "Host",
                },
            },
        });
    }
    // console.log(currentUser[0]._id)

    return (
        <div ref={myMeeting} className="max-w-6xl mx-auto  px-6 mt-16 lg:py-20">

        </div>
    );
};

export default Meet;