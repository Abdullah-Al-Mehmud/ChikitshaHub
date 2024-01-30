import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';


const Meet = () => {

    const {meetId} = useParams();

    const meeting = async (e) => {
        const appID = 1064521483;
        const serverSecret = "7215c500b6b837ab322dcdd397507095";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, meetId, )
    }

    return (
        <div className="max-w-6xl mx-auto  px-6 mt-16 lg:py-20">
            Meet{meetId}
        </div>
    );
};

export default Meet;