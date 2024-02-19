/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import UserDashboard from "./userDashboard/UserDashboard";

import AdminDashboard from "./adminDashboard/AdminDashboard";
import DoctorDashBoard from "./doctorDashboard/DoctorDashBoard";
import useDoctor from "../../Hooks/useDoctor";
import useAdmin from "../../Hooks/useAdmin";
const Dashboard = () => {
  // const doctor = false;
  // const admin = false;
  const [isDoctor, isDoctorLoading] = useDoctor();
  const [isAdmin, isAdminLoading] = useAdmin();
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  // console.log(isAdmin);
  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };
  const closeSideMenu = () => {
    setIsSideMenuOpen(false);
  };

  if (isDoctorLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-dots loading-lg "></span>
      </div>
    );
  }
  if (isAdminLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-dots loading-lg "></span>
      </div>
    );
  }

  // console.log(isAdmin, isDoctor);
  // if (isDoctorLoading) {
  //   return (
  //     <div className="flex justify-center items-center h-screen">
  //       <span className="loading loading-dots loading-lg "></span>
  //     </div>
  //   );
  // }
  if (isAdminLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-dots loading-lg "></span>
      </div>
    );
  }
  return (
    <div>
      {isDoctor ? (
        <DoctorDashBoard
          isSideMenuOpen={isSideMenuOpen}
          toggleSideMenu={toggleSideMenu}
          closeSideMenu={closeSideMenu}
        />
      ) : isAdmin ? (
        <AdminDashboard
          isSideMenuOpen={isSideMenuOpen}
          toggleSideMenu={toggleSideMenu}
          closeSideMenu={closeSideMenu}
        />
      ) : (
        <UserDashboard
          isSideMenuOpen={isSideMenuOpen}
          toggleSideMenu={toggleSideMenu}
          closeSideMenu={closeSideMenu}
        />
      )}
    </div>
  );
};

export default Dashboard;
