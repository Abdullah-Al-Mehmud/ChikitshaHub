// import React from "react";
import PropTypes from "prop-types";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Conversation = ({ chat, currentUserEmail }) => {
  const axios = useAxiosPublic();
  const chatEmail = chat.members.find((email) => email !== currentUserEmail);

  const { data: users = [] } = useQuery({
    queryKey: ["users", chatEmail],
    queryFn: async () => {
      const res = await axios.get(`/users/${chatEmail}`);
      return res.data;
    },
  });

  return (
    <div>
      {users.map((user) => (
        <div key={user?._id} className="flex items-center gap-2 px-5 pt-5">
          <div className="avatar">
            <div className="w-14 rounded-full">
              <img src={user?.photoUrl} alt="User Avatar" />
            </div>
          </div>
          <div className="font-bold">
            {user?.name}
            <p className="font-thin">Online</p>
          </div>
        </div>
      ))}
      <hr className="w-60 h-1 flex -mt-5 my-4 bg-gray-100 border-0 rounded md:my-10" />
    </div>
  );
};

Conversation.propTypes = {
  chat: PropTypes.object.isRequired,
  currentUserEmail: PropTypes.string.isRequired,
};

export default Conversation;
