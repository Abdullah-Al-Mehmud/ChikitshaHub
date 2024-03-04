/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import useAxiosPrivet from "../../../../Hooks/useAxiosPrivet";
import UserMyProfileEdit from "./userMyProfileEdit";

const UserMyProflie = () => {
  const [openModal, setOpenModal] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const { photoURL, displayName, email } = user || {};
  const axios = useAxiosPrivet();
  const { data: userProfile = [], refetch } = useQuery({
    queryKey: ["userProfile"],
    queryFn: async () => {
      const res = await axios.get(`/users/${email}`);
      return res.data;
    },
  });
  const { _id, name, age, bloodGroup, gender, photoUrl, phoneNumber } =
    userProfile || {};
  //   console.log(userProfile);
  return (
    <div>
      <div className="flex flex-col lg:p-10 p-2 gap-1 lg:mt-20 mt-16 justify-center w-full items-center ">
        <div className="bg-white p-10 flex flex-col gap-2 rounded-lg justify-center lg:w-[60%] w-[90%]">
          <div>
            <img
              src={photoUrl}
              className="w-32 h-32 cover-fill  rounded-full"
              alt=""
            />
          </div>
          <div className="flex gap-2">
            <h1>Name:</h1>
            <h1 className="text-blue-950">
              {name ? name : <span className="text-red-600">Update Name</span>}
            </h1>
          </div>
          <div className="flex gap-2">
            <h1>Email:</h1>
            <h1 className="text-blue-950">
              {email ? (
                email
              ) : (
                <span className="text-red-600">Update Email</span>
              )}
            </h1>
          </div>
          <div className="flex gap-2">
            <h1>Phone Number:</h1>
            <h1 className="text-blue-950">
              {phoneNumber ? (
                phoneNumber
              ) : (
                <span className="text-red-600">Update Phone Number</span>
              )}
            </h1>
          </div>
          <div className="flex gap-2">
            <h1>Age:</h1>
            <h1 className="text-blue-950">
              {age ? age : <span className="text-red-600">Update Age</span>}
            </h1>
          </div>
          <div className="flex gap-2">
            <h1>Blood Group:</h1>
            <h1 className="text-blue-950">
              {bloodGroup ? (
                bloodGroup
              ) : (
                <span className="text-red-600">Update Blood Group</span>
              )}
            </h1>
          </div>
          <div className="flex gap-2">
            <h1>Gender:</h1>
            <h1 className="text-blue-950">
              {gender ? (
                gender
              ) : (
                <span className="text-red-600">Update Gender</span>
              )}
            </h1>
          </div>
        </div>
        <button
          onClick={() => setOpenModal(true)}
          className="rounded-sm bg-sky-500 px-5 py-[6px] text-white"
        >
          Update Profile
        </button>
        <div
          className={`fixed z-[100] flex items-center justify-center ${
            openModal ? "opacity-1 visible" : "invisible opacity-0"
          } inset-0 bg-black/20 backdrop-blur-sm duration-100`}
        >
          <div
            className={`absolute lg:max-w-xl max-w-[90%] mx-auto rounded-sm bg-white p-3 pb-5 text-center drop-shadow-2xl ${
              openModal
                ? "scale-1 opacity-1 duration-300"
                : "scale-0 opacity-0 duration-150"
            } `}
          >
            <svg
              onClick={() => setOpenModal(false)}
              className="mx-auto mr-0 w-8 cursor-pointer"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g strokeWidth="0"></g>
              <g strokeLinecap="round" strokeLinejoin="round"></g>
              <g>
                <path
                  d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"
                  fill="#000"
                ></path>
              </g>
            </svg>
            <div>
              <UserMyProfileEdit
                data={userProfile}
                setOpenModal={setOpenModal}
                refetch={refetch}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMyProflie;
