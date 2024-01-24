import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Contact from "./../Pages/contact/Contact";
import AboutUs from "../Pages/AboutUs/AboutUs";
import UserRegistration from "../Pages/Register/UserRegister/UserRegister";
import DoctorRegister from "../Pages/Register/DoctorRegister/DoctorRegister";
import Specialties from "../Pages/Specialties/Specialties";
import Login from "../Login/Login";
import MoreSpecialties from "../Components/Specialties/MoreSpecialties";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
        path: '/userRegister',
        element: <UserRegistration></UserRegistration>
      },
      {
        path: '/doctorRegister',
        element: <DoctorRegister></DoctorRegister>
      },
      {
        path: "/specialties",
        element: <Specialties />,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/morespecialties",
        element: <MoreSpecialties></MoreSpecialties>,
      },
    ],
  },
]);

export default router;
