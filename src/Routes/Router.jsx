import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Contact from "./../Pages/contact/Contact";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Doctors from "../Pages/Doctors/Doctors";
import DoctorProfile from "../Pages/DoctorProfile/DoctorProfile";
import UserRegistration from "../Pages/Register/UserRegister/UserRegister";
import DoctorRegister from "../Pages/Register/DoctorRegister/DoctorRegister";
import Login from "../Login/Login";
import Specialties from './../Pages/Specialties/Specialties';
import Tips from "../Pages/Tips/Tips";
import Readmore from "../Pages/Tips/Readmore";
import UserProfile from "../Pages/user/userProfile";
import Home from "../Pages/home/Home";
import Dashboard from "../Pages/dashboard/Dashboard";
import Meet from "../Pages/Meet/Meet";
import Emailjs from "../Components/Emailjs/Emailjs";
import AllDoctors from "../Pages/dashboard/userDashboard/allDoctors/AllDoctors";
import DoctorHome from "../Pages/dashboard/doctorDashboard/doctorHome/DoctorHome";
import DoctorReq from "../Pages/dashboard/adminDashboard/doctorReq/DoctorReq";
import DoctorProfileReview from "../Pages/dashboard/adminDashboard/doctorReq/DoctorProfileReview/DoctorProfileReview";
import AdminAppointment from "../Pages/dashboard/adminDashboard/adminAppointment/AdminAppointment";
import AdminAllDoctor from "../Pages/dashboard/adminDashboard/adminAllDoctor/AdminAllDoctor";
import AdminAllPatients from "../Pages/dashboard/adminDashboard/adminAllPatients/AdminAllPatients";
import AdminSpecialities from "../Pages/dashboard/adminDashboard/adminSpecialities/AdminSpecialities";
import PrivateRouter from './PrivateRouter';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <PrivateRouter><AboutUs /></PrivateRouter>,
      },
      {
        path: "/doctorRegister",
        element: <DoctorRegister></DoctorRegister>,
      },
      {
        path: "/specialties",
        element: <Specialties />,
      },
      {
        path: "/tips",
        element: <Tips></Tips>,
      },
      {
        path: "/readmores/:id",
        element: <Readmore></Readmore>,
        loader: () => fetch("/Tips.json"),
      },
      {
        path: "/doctors/1/:category",
        element: <Doctors />,
        loader: ({ params }) =>
          fetch(
            `https://chikitsha-hub-server.vercel.app/doctors/1/${params.category}`
          ),
      },
      {
        path: "/doctor/:id",
        element: <DoctorProfile />,
        loader: ({ params }) =>
          fetch(`https://chikitsha-hub-server.vercel.app/doctors/${params.id}`),
      },
      {
        path: "/meet/:meetId",
        element: <Meet />,
      },
      
    ],
  },

  {
    path: "/userRegister",
    element: <UserRegistration></UserRegistration>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "home",
        element: <UserProfile />,
      },
      {
        path: "alldoctors",
        element: <AllDoctors />,
      },
      {
        path: "sendTips",
        element: <Emailjs></Emailjs>,
      },
      {
        path: "doctorHome",
        element: <DoctorHome />,
      },
      {
        path: "doctorReq",
        element: <DoctorReq />,
      },
      {
        path: "doctorReq/doctorProfileReview/:id",
        element: <DoctorProfileReview />,
        loader: ({ params }) =>
          fetch(`https://chikitsha-hub-server.vercel.app/doctors/${params.id}`),
      },
      {
        path: "/dashboard/allappointments",
        element: <AdminAppointment></AdminAppointment>,
      },
      {
        path: "/dashboard/adminAllDoctor",
        element: <AdminAllDoctor />,
      },
      {
        path: "/dashboard/allpatients",
        element: <AdminAllPatients />,
      },
      {
        path: "allspecialities",
        element: <AdminSpecialities />,
      },
      // {
      //   path: "/dashboard/userProfile",
      //   element: <UserProfile></UserProfile>,
      // },
    ],
  },
]);

export default router;
