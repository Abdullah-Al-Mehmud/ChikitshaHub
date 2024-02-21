import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Contact from "./../Pages/contact/Contact";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Doctors from "../Pages/Doctors/Doctors";
import UserRegistration from "../Pages/Register/UserRegister/UserRegister";
import DoctorRegister from "../Pages/Register/DoctorRegister/DoctorRegister";
import Login from "../Login/Login";
import Specialties from "./../Pages/Specialties/Specialties";
import Tips from "../Pages/Tips/Tips";
import Readmore from "../Pages/Tips/Readmore";
import Dashboard from "../Pages/dashboard/Dashboard";
import Meet from "../Pages/Meet/Meet";
import AllDoctors from "../Pages/dashboard/userDashboard/allDoctors/AllDoctors";
import DoctorHome from "../Pages/dashboard/doctorDashboard/doctorHome/DoctorHome";
import DoctorReq from "../Pages/dashboard/adminDashboard/doctorReq/DoctorReq";
import AdminAppointment from "../Pages/dashboard/adminDashboard/adminAppointment/AdminAppointment";
import AdminAllDoctor from "../Pages/dashboard/adminDashboard/adminAllDoctor/AdminAllDoctor";
import AdminAllPatients from "../Pages/dashboard/adminDashboard/adminAllPatients/AdminAllPatients";
import AdminSpecialities from "../Pages/dashboard/adminDashboard/adminSpecialities/AdminSpecialities";
import PrivateRouter from "./PrivateRouter";
import Error from "../Pages/Error/Error";
import UserAppointment from "../Pages/dashboard/userDashboard/userAppointment/UserAppointment";
import DoctorTimeScedule from "../Pages/dashboard/doctorDashboard/doctorTimeSchedule/DoctorTimeScedule";
import UserProfile from "../Pages/user/UserProfile";
import DoctorProfile from "../Pages/DoctorProfile/DoctorProfile";
import Home from "../Pages/Home/Home";
import AdminSendTips from "../Pages/dashboard/adminDashboard/adminSendTips/AdminSendTips";
import DoctorPrescription from "../Pages/dashboard/doctorDashboard/doctorPrescrition/DoctorPrescription";
import DoctorProfileReview from "../Pages/dashboard/adminDashboard/doctorReq/doctorProfileReview/DoctorProfileReview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error />,
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
        element: (
          <PrivateRouter>
            <AboutUs />
          </PrivateRouter>
        ),
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

        loader: ({ params }) =>
          fetch(`https://chikitsha-hub-server.vercel.app/tips/${params.id}`),
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
        path: "/doctors/:id",
        element: <DoctorProfile />,
        loader: ({ params }) =>
          fetch(`https://chikitsha-hub-server.vercel.app/doctors/${params.id}`),
      },
      {
        path: "/meet/:meetId",
        element: <Meet />,
      },
      // {
      //   path: "/login",
      //   element: <Login></Login>,
      // },
      // {
      //   path: "/morespecialties",
      //   element: <MoreSpecialties></MoreSpecialties>,
      // },
      // {
      //   path: "/userProfile",
      //   element: <UserProfile></UserProfile>,
      // },
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
    errorElement: <Error />,
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
        element: <AdminSendTips></AdminSendTips>,
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
      {
        path: "/dashboard/userAppointment",
        element: <UserAppointment />,
      },
      {
        path: "/dashboard/timeScedule",
        element: <DoctorTimeScedule />,
      },
      {
        path: "/dashboard/prescrption",
        element: <DoctorPrescription />,
      },
    ],
  },
]);

export default router;
