/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
const DoctorTimeScedule = () => {
  const user = useSelector((state) => state.auth.user);
  const { photoURL, email, displayName } = user || {};
  return (
    <div>
      <h1>Appointment Time Scedule</h1>
      <h1>{displayName}</h1>
      <h1>{email}</h1>
    </div>
  );
};

export default DoctorTimeScedule;
