import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import PropTypes from "prop-types";
import { format } from "timeago.js";
import InputEmoji from "react-input-emoji";
import { useState } from "react";
import { IoIosSend } from "react-icons/io";

const ChatBox = ({ currentChat, currentUser }) => {
  const [newMessage, setNewMessage] = useState("");
  const chatEmail = currentChat?.members?.find(
    (email) => email !== currentUser
  );

  const { data: chats = [] } = useQuery({
    queryKey: ["users", chatEmail],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:3000/users/${chatEmail}`);
      return res.data;
    },
  });
  // console.log(chats);

  // fetching data for messages
  const { data: messages = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:3000/messages/${currentChat?._id}`
      );
      return res.data;
    },
  });
  console.log(messages);

  const handleChange = (newMessage) => {
    setNewMessage(newMessage);
  };

  return (
    <>
      {currentChat ? (
        <div>
          {chats?.map((chat) => (
            <>
              <div
                key={chat?._id}
                className="flex relative items-center gap-2 px-5 pt-5">
                <div className="avatar">
                  <div className="w-14 rounded-full">
                    <img src={chat?.photoUrl} />
                  </div>
                </div>
                <div className="font-bold">{chat?.name}</div>
              </div>
              <hr className="w-full h-1 flex -mt-5 my-4 bg-gray-100 border-0 rounded md:my-10  "></hr>
              {/* chats */}

              {messages?.senderEmail === currentUser ? (
                <div className="chat chat-start">
                  <div className="chat-bubble">
                    {messages?.map((message) => (
                      <div key={message?._id}>
                        {message.text}
                        <span className="block font-thin text-xs">
                          {format(message.createdAt)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="chat chat-start">
                  <div className="chat-bubble">
                    {messages?.map((message) => (
                      <div key={message?._id}>
                        {message.text}
                        <span className="block font-thin text-xs">
                          {format(message.createdAt)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {/* chat sender */}
              <div className="absolute flex items-center bottom-5 gap-5 ">
                <div className="w-[850px]">
                  <InputEmoji
                    value={newMessage}
                    onChange={handleChange}></InputEmoji>
                </div>
                <button className="flex items-center relative w-24 md:mx-auto lg:mx-0 border-2 border-[#409bd4] text-[#409bd4] px-4 py-2 rounded-full group ">
                  <span>Send</span>
                  <span className="absolute w-1/6 right-3 group-hover:w-5/6 box-content duration-300 flex justify-center bg-white rounded-full">
                    <IoIosSend className="w-14" />
                  </span>
                </button>
              </div>
            </>
          ))}
        </div>
      ) : (
        <div className="flex justify-center h-screen items-center text-4xl font-bold">
          <p>Tap on a chat to start Conversation....</p>
        </div>
      )}
    </>
  );
};

ChatBox.propTypes = {
  currentChat: PropTypes.object,
  currentUser: PropTypes.string,
};

export default ChatBox;
