import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Contact from "./../Pages/contact/Contact";
import AboutUs from "../Pages/AboutUs/AboutUs";
<<<<<<< HEAD
import Home from "../Pages/Home/Home";
=======
import Specialties from "../Pages/Specialties/Specialties";
import Login from "../Login/Login";
import MoreSpecialties from "../Components/Specialties/MoreSpecialties";
>>>>>>> 20202366511affff6fc37630cb3ce584b7be2f07

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
