import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Contact from './../Pages/contact/Contact';
import AboutUs from "../Pages/AboutUs/AboutUs";
import Home from "../Pages/Home/Home";
import Specialties from "../Pages/Specialties/Specialties";


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
    ],
  },
]);

export default router;
