/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { imageUpload } from "../../../../api/utils";

const UserMyProfileEdit = ({ data, setOpenModal, refetch }) => {
  const { _id, name, email, age, bloodGroup, gender, photoUrl, phoneNumber } =
    data || {};
  const axios = useAxiosPublic();
  const [uploadImageName, setUploadImageName] = useState("Upload Image");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const age = form.age.value;
    const gender = form.gender.value;
    const bloodGroup = form.bloodGroup.value;
    const phoneNumber = form.phoneNumber.value;
    const dataToUpdate = {
      age,
      gender,
      bloodGroup,
      phoneNumber,
    };

    // console.log(dataToUpdate);
    try {
      const res = await axios.patch(`/users/${_id}`, dataToUpdate);
      // console.log(res);
      setUploadImageName("Uploaded!");
      if (res.statusText === "OK") {
        Swal.fire({
          title: "Specialist Update!",
          text: "Your request accepted.",
          icon: "success",
        });
        setOpenModal(false);
      }
      refetch();
    } catch (err) {
      // console.log(err);
    } finally {
      //   setLoading(false);
    }
  };
  return (
    <div>
      <h1>Edit your profile</h1>
      <form
        onSubmit={handleSubmit}
        className="lg:w-[500px] w-[95%] overflow-scroll mx-auto lg:p-3 p-1 rounded-lg"
      >
        {/* <div className="lg:mb-2 mb-1">
          <label
            htmlFor="large-input"
            className="block lg:mb-2 mb-1 text-sm font-medium text-gray-900 text-start"
          >
            Image:
          </label>
          <input
            type="file"
            onChange={(e) => handleUploadImage(e.target.files[0])}
            id="large-input"
            className="block w-full p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-50 "
          />
        </div> */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-2">
          <div className="lg:mb-2 mb-1">
            <label
              htmlFor="large-input"
              className="block lg:mb-2  text-sm font-medium text-gray-900 text-start"
            >
              Name:
            </label>
            <input
              type="text"
              id="large-input"
              name="name"
              disabled
              defaultValue={name}
              className="block w-full p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-50 "
            />
          </div>
          <div className="lg:mb-2 mb-1">
            <label
              htmlFor="large-input"
              className="block lg:mb-2 text-sm font-medium text-gray-900 text-start"
            >
              Email:
            </label>
            <input
              type="text"
              id="large-input"
              name="email"
              defaultValue={email}
              disabled
              className="block w-full p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-50 "
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-2 gap-2">
          <div className="lg:mb-2 mb-1">
            <label
              htmlFor="large-input"
              className="block lg:mb-2 text-sm font-medium text-gray-900 text-start"
            >
              Phone Number:
            </label>
            <input
              type="number"
              id="large-input"
              name="phoneNumber"
              defaultValue={phoneNumber}
              className="block w-full p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-50 "
            />
          </div>
          <div className="lg:mb-2 mb-1">
            <label
              htmlFor="large-input"
              className="block lg:mb-2 text-sm font-medium text-gray-900 text-start"
            >
              Age:
            </label>
            <input
              type="number"
              id="large-input"
              name="age"
              defaultValue={age}
              className="block w-full p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-50 "
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-2 gap-2">
          <div className="lg:mb-2 mb-1">
            <label
              htmlFor="large-input"
              className="block lg:mb-2 text-sm font-medium text-gray-900 text-start"
            >
              Blood Group:
            </label>
            <select
              id="small"
              name="bloodGroup"
              defaultValue={bloodGroup}
              className="block w-full p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-50 "
            >
              <option selected>Choose a Blood Group</option>
              <option value="A+">A RhD positive (A+)</option>
              <option value="A-">A RhD negative (A-)</option>
              <option value="B-">B RhD positive (B+)</option>
              <option value="B-">B RhD negative (B-)</option>
              <option value="O+">O RhD positive (O+)</option>
              <option value="O-">O RhD negative (O-)</option>
              <option value="AB+">AB RhD positive (AB+)</option>
              <option value="AB-">AB RhD negative (AB-)</option>
            </select>
          </div>
          <div className="lg:mb-2 mb-1">
            <label
              htmlFor="large-input"
              className="block lg:mb-2 text-sm font-medium text-gray-900 text-start"
            >
              Gender:
            </label>
            <select
              id="small"
              name="gender"
              defaultValue={gender}
              className="block w-full p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-50 "
            >
              <option selected>Choose a gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <button
            onClick={() => setOpenModal(false)}
            className="me-2 rounded-sm bg-green-700 px-6 py-1 text-white"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserMyProfileEdit;
