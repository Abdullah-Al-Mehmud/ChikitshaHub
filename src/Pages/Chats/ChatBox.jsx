import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useQuery } from "@tanstack/react-query";
import InputEmoji from "react-input-emoji";
import { IoIosSend } from "react-icons/io";
import { format } from "timeago.js";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const ChatBox = ({ currentChat, currentUser, setSendMessage, receiveMessage }) => {
  const [newMessage, setNewMessage] = useState("");
  // const chatEmail = currentChat?.members?.find((email) => email !== currentUser);
  const axios = useAxiosPublic();

  const { data: messages = [] } = useQuery({
    queryKey: ["messages", currentChat?._id],
    queryFn: async () => {
      const res = await axios.get(`/messages/${currentChat?._id}`);
      return res.data;
    },
  });

  useEffect(() => {
    if (receiveMessage !== null && receiveMessage.chatId === currentChat._id) {
      messages[receiveMessage];
    }
  }, [receiveMessage, messages, currentChat]);

  const handleChange = (newMessage) => {
    setNewMessage(newMessage);
  };

  const handleMsgSend = (e) => {
    e.preventDefault();
    const message = {
      senderEmail: currentUser,
      text: newMessage,
      chatId: currentChat._id,
    };

    axios.post("/messages", message).then((result) => {
      setNewMessage([...messages, result]);
      setNewMessage("");
    });

    const receiverId = currentChat.members.find((email) => email !== currentUser);
    setSendMessage([...messages, receiverId]);
  };

  return (
    <>
      {currentChat ? (
        <div>
          {messages.map((message) => (
            <div key={message?._id} className={`chat ${message.senderEmail === currentUser ? "chat-start" : ""}`}>
              <div className="chat-bubble">
                {message.text}
                <span className="block font-thin text-xs">{format(message.createdAt)}</span>
              </div>
            </div>
          ))}
          <div className="absolute flex items-center bottom-5 gap-5">
            <div className="w-[850px]">
              <InputEmoji value={newMessage} onChange={handleChange} />
            </div>
            <button onClick={handleMsgSend} className="flex items-center relative w-24 md:mx-auto lg:mx-0 border-2 border-[#409bd4] text-[#409bd4] px-4 py-2 rounded-full group">
              <span>Send</span>
              <span className="absolute w-1/6 right-3 group-hover:w-5/6 box-content duration-300 flex justify-center bg-white rounded-full">
                <IoIosSend className="w-14" />
              </span>
            </button>
          </div>
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
  currentChat: PropTypes.object.isRequired,
  currentUser: PropTypes.string.isRequired,
  setSendMessage: PropTypes.func.isRequired,
  receiveMessage: PropTypes.object,
};

export default ChatBox;
