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
// import MoreSpecialties from "../Components/Specialties/MoreSpecialties";
// import Specialties from "../Components/Specialties/Specialties";
import Tips from "../Pages/Tips/Tips";
import Readmore from "../Pages/Tips/Readmore";

import UserProfile from "../Pages/user/userProfile";
import Home from "../Pages/Home/Home";
import Prescription from "../Components/Prescription/Prescription";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/prescription",
        element: <Prescription></Prescription>
      },
      // {
      //   path: "/userRegister",
      //   element: <UserRegistration></UserRegistration>,
      // },
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
      // {
      //   path: "/login",
      //   element: <Login></Login>,
      // },
      // {
      //   path: "/morespecialties",
      //   element: <MoreSpecialties></MoreSpecialties>,
      // },
      {
        path: "/userProfile",
        element: <UserProfile></UserProfile>,
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
]);

export default router;
