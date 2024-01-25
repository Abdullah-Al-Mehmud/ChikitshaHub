import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Contact from './../Pages/contact/Contact';
import AboutUs from "../Pages/AboutUs/AboutUs";
import Home from "../Pages/Home/Home";
import Doctors from "../Pages/Doctors/Doctors";
import DoctorProfile from "../Pages/DoctorProfile/DoctorProfile";
import UserRegistration from "../Pages/Register/UserRegister/UserRegister";
import DoctorRegister from "../Pages/Register/DoctorRegister/DoctorRegister";
import Login from "../Login/Login";
import Specialties from './../Pages/Specialties/Specialties';


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
        path: "/doctors/1/:category",
        element: <Doctors />,
        loader: ({params}) => fetch(`https://chikitsha-hub-server.vercel.app/doctors/1/${params.category}`)
      },
      {
        path: "/doctor/:id",
        element: <DoctorProfile />,
        loader: ({params}) => fetch(`https://chikitsha-hub-server.vercel.app/doctors/${params.id}`)
      },
      {
        path:"/login",
        element:<Login></Login>
      },
    ],
  },
]);

export default router;
