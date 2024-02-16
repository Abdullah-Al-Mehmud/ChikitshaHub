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
  const [isDoctor] = useDoctor();
  const [isAdmin] = useAdmin();
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  // console.log(isAdmin);
  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };
  const closeSideMenu = () => {
    setIsSideMenuOpen(false);
  };

  // console.log(isAdmin, isDoctor);
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
