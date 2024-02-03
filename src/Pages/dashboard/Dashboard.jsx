/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import UserDashboard from "./userDashboard/UserDashboard";

import AdminDashboard from "./adminDashboard/AdminDashboard";
import DoctorDashBoard from "./doctorDashboard/DoctorDashBoard";
const Dashboard = () => {
  const doctor = false;
  const admin = true;
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };
  const closeSideMenu = () => {
    setIsSideMenuOpen(false);
  };
  return (
    <div>
      {doctor ? (
        <DoctorDashBoard
          isSideMenuOpen={isSideMenuOpen}
          toggleSideMenu={toggleSideMenu}
          closeSideMenu={closeSideMenu}
        />
      ) : admin ? (
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
