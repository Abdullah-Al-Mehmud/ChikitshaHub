import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Contact from './../Pages/contact/Contact';
import AboutUs from "../Pages/AboutUs/AboutUs";
import Specialties from "../Pages/Specialties/Specialties";
import Login from "../Login/Login";
import MoreSpecialties from "../Components/Specialties/MoreSpecialties";

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
        element: <Contact/>,
      },
      {
        path: "/about",
        element: <AboutUs/>,
      },
      {
        path: "/specialties",
        element: <Specialties/>,
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/morespecialties",
        element:<MoreSpecialties></MoreSpecialties>
      }
    ],
  },
]);

export default router;
