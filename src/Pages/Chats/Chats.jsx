// const Chats = () => {
//   return (
//     <div className="mt-20 grid grid-cols-2">
//       <div className="bg-green-500">left side</div>
//       <div className="bg-red-500">right side</div>
//     </div>
//   );
// };

// export default Chats;

import { useEffect, useRef, useState } from "react";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { useSelector } from "react-redux";
import useAxiosPrivet from "../../Hooks/useAxiosPrivet";
import { useQuery } from "@tanstack/react-query";
import Conversation from "./Conversation";
import ChatBox from "./ChatBox";
import { io } from "socket.io-client";
// import { HiMiniBars3CenterLeft } from "react-icons/hi2";

const Chats = () => {
  const user = useSelector((state) => state.auth.user);
  const [currentChat, setCurrentChat] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [sendMessage, setSendMessage] = useState(null);
  const [receiveMessage, setReceiveMessage] = useState(null);
  // console.log(user?.email);
  const axiosPrivate = useAxiosPrivet();
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const socket = useRef();

  // send message to socket server
  useEffect(() => {
    if (sendMessage !== null) {
      socket.current.emit("send-message", sendMessage);
    }
  }, [sendMessage]);

  useEffect(() => {
    socket.current = io("http://localhost:8800");
    socket.current.emit("new-user-add", user?.email);
    socket.current.on("get-users", (users) => {
      setOnlineUsers(users);
      console.log(onlineUsers);
    });
  }, [user]);

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  const { data: chats = [] } = useQuery({
    queryKey: ["chats"],
    queryFn: async () => {
      const res = await axiosPrivate.get(`/chat/${user?.email}`);
      return res.data;
    },
  });

  // receive message from a socket server
  useEffect(() => {
    socket.current.on("receive-message", (data) => {
      setReceiveMessage(data);
    });
  }, []);

  return (
    <div
      className={`flex h-screen bg-white ${
        isSideMenuOpen ? "overflow-hidden" : ""
      }`}>
      <aside className="z-20 flex-shrink-0 hidden w-80 pl-2  overflow-y-auto bg-gray-400 md:block">
        <div>
          <div className="text-blue-950 ">
            <div className="flex p-2  bg-white">
              <div className="flex py-3 px-2 items-center">
                <h2 className="hidden md:block md:text-3xl text-xl font-semibold">
                  Chats
                </h2>
              </div>
            </div>
            <div className="hover:bg-gray-500 cursor-pointer">
              {chats?.map((chat) => (
                <div onClick={() => setCurrentChat(chat)} key={chat?._id}>
                  <Conversation chat={chat} currentUserEmail={user?.email} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>
      <div className="fixed inset-0 -z-10 flex items-end  bg-opacity-50 sm:items-center sm:justify-center"></div>
      <aside
        className={`fixed inset-y-0 z-20 flex-shrink-0 w-64 mt-16  ease-in-out duration-300 overflow-y-auto bg-white
        ${!isSideMenuOpen ? "-translate-x-full " : "translate-x-0"}
        
        md:hidden`}>
        <div className="text-blue-950">
          <div className="flex p-2 bg-white">
            <div className="flex py-3 px-2 items-center">
              <h2 className="hidden md:block md:text-3xl text-xl font-semibold">
                Chikitsha<span className="text-[#409bd4]">Hub</span>
              </h2>
            </div>
          </div>
          <div>
            <ul className="mt-6 leading-10">
              <li className="relative px-2 py-1 ">
                <a
                  className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600"
                  href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  <span className="ml-4">DASHBOARD</span>
                </a>
              </li>
              <li className="relative px-2 py-1 ">
                <a
                  className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600"
                  href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  <span className="ml-4">DASHBOARD</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
      <div className="flex flex-col flex-1 w-full overflow-y-auto ">
        <header className="z-40 py-5 bg-slate-50 fixed w-full top-0">
          <div className="flex items-center justify-between h-8 px-6 mx-auto">
            {/* Mobile hamburger */}
            <button
              className="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple"
              onClick={toggleSideMenu}
              aria-label="Menu">
              {isSideMenuOpen ? (
                <FaXmark className="w-6 h-6" />
              ) : (
                <FaBarsStaggered className="w-6 h-6" />
              )}
            </button>

            <div className="flex justify-center mt-2 mr-4 w-[80%]">
              <div className="relative flex w-full flex-wrap items-stretch mb-3">
                <input
                  type="search"
                  placeholder="Search doctor's"
                  // {...$attributes}
                  className="form-input px-3 py-3 placeholder-gray-700 text-gray-700 relative bg-white rounded-lg text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10"
                />
                <span className="z-10 h-full leading-snug font-normal text-center text-gray-700 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 -mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </header>
        <main className="mt-20 scroll-smooth">
          <ChatBox
            setSendMessage={setSendMessage}
            receiveMessage={receiveMessage}
            currentChat={currentChat}
            currentUser={user?.email}></ChatBox>
        </main>
      </div>
    </div>
  );
};

export default Chats;
