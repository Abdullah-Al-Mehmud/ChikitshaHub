/* eslint-disable no-unused-vars */
import React from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { getUrlParams } from "../../Utils/getUrl";

const Live = () => {
  const { liveId } = useParams();
  const user = useSelector((state) => state.auth.user);
  const userId = user?.uid;
  const userName = user?.displayName;
  // console.log(userId);
  // console.log(userName);
  let role_str = getUrlParams(window.location.href).get("role") || "Host";
  // console.log(role_str);
  const roomID = liveId;
  // console.log(roomID);
  const role =
    role_str === "Host"
      ? ZegoUIKitPrebuilt.Host
      : role_str === "Cohost"
      ? ZegoUIKitPrebuilt.Cohost
      : ZegoUIKitPrebuilt.Audience;
  // console.log(role);
  let sharedLinks = [];
  if (role === ZegoUIKitPrebuilt.Host || role === ZegoUIKitPrebuilt.Cohost) {
    sharedLinks.push({
      name: "Join as co-host",
      url:
        window.location.protocol +
        "//" +
        window.location.host +
        window.location.pathname +
        "?roomID=" +
        roomID +
        "&role=Cohost",
    });
  }

  sharedLinks.push({
    name: "Join as audience",
    url:
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname +
      "?roomID=" +
      roomID +
      "&role=Audience",
  });
  const myLiveStream = async (element) => {
    const appID = parseInt(import.meta.env.VITE_LIVE_ID);
    const serverSecret = import.meta.env.VITE_LIVE_SERVER_SECRET;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      userId,
      userName
    );
    // console.log(appID);
    // console.log(roomID);
    // console.log(serverSecret);
    // console.log(kitToken);
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    // console.log(zp);
    zp.joinRoom({
      container: element,
      maxUsers: 100,
      scenario: {
        mode: ZegoUIKitPrebuilt.LiveStreaming,
        config: {
          role,
        },
      },
      sharedLinks,
    });
  };
  return (
    <div
      className="myCallContainer mt-20"
      ref={myLiveStream}
      style={{ width: "100vw", height: "90vh" }}
    ></div>
  );
};

export default Live;
