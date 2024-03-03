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
import AdminAllReview from "../Pages/dashboard/adminDashboard/adminAllReview/AdminAllReview";
import PrescriptionUser from "../Pages/dashboard/userDashboard/PrescriptionUser/PrescriptionUser";
import DoctorLive from "../Pages/dashboard/doctorDashboard/doctorLive/DoctorLive";
import AdminAllLive from "../Pages/dashboard/adminDashboard/adminAllLive/AdminAllLive";
import Live from "../Pages/Live/Live";
import JoinLive from "../Pages/JoinLive/JoinLive";
// import PrescriptionToPDF from "../Pages/PrescriptionToPDF/PrescriptionToPDF";
import AdminRouter from './AdminRouter';
import DoctorRouter from './DoctorRouter';

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
        element: <AboutUs />
      },
      {
        path: "/doctorRegister",
        element: <PrivateRouter><DoctorRegister></DoctorRegister></PrivateRouter>,
      },
      // {
      //   path: "/prescriptionToPdf",
      //   element: <PrescriptionToPDF />,
      // },
      {
        path: "/specialties",
        element: <Specialties />,
      },
      {
        path: "/tips",
        element: <Tips></Tips>,
      },
      {
        path: "/joinlive",
        element: <PrivateRouter><JoinLive></JoinLive></PrivateRouter>,
      },
      {
        path: "/readmores/:id",
        element: <PrivateRouter><Readmore></Readmore></PrivateRouter>,

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
        element: <PrivateRouter><DoctorProfile /></PrivateRouter>,
        loader: ({ params }) =>
          fetch(`https://chikitsha-hub-server.vercel.app/doctors/${params.id}`),
      },
      {
        path: "/meet/:meetId",
        element: <PrivateRouter><Meet /></PrivateRouter>,
      },
      {
        path: "/live/:liveId/host",
        element: <PrivateRouter><Live /></PrivateRouter>,
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
    element: <PrivateRouter><Dashboard /></PrivateRouter>,
    errorElement: <Error />,
    children: [
      {
        path: "home",
        element: <PrivateRouter><UserProfile /></PrivateRouter>,
      },
      {
        path: "alldoctors",
        element: <PrivateRouter><AllDoctors /></PrivateRouter>,
      },
      {
        path: "sendTips",
        element: <PrivateRouter><AdminRouter><AdminSendTips></AdminSendTips></AdminRouter></PrivateRouter>,
      },
      {
        path: "doctorHome",
        element: <PrivateRouter><DoctorRouter><DoctorHome /></DoctorRouter></PrivateRouter>,
      },
      {
        path: "doctorReq",
        element: <PrivateRouter><AdminRouter><DoctorReq /></AdminRouter></PrivateRouter>,
      },
      {
        path: "doctorReq/doctorProfileReview/:id",
        element: <PrivateRouter><AdminRouter><DoctorProfileReview /></AdminRouter></PrivateRouter>,
        loader: ({ params }) =>
          fetch(`https://chikitsha-hub-server.vercel.app/doctors/${params.id}`),
      },
      {
        path: "/dashboard/allappointments",
        element: <PrivateRouter><AdminRouter><AdminAppointment></AdminAppointment></AdminRouter></PrivateRouter>,
      },
      {
        path: "/dashboard/adminAllDoctor",
        element: <PrivateRouter><AdminRouter><AdminAllDoctor /></AdminRouter></PrivateRouter>,
      },
      {
        path: "/dashboard/allpatients",
        element: <PrivateRouter><AdminRouter><AdminAllPatients /></AdminRouter></PrivateRouter>,
      },
      {
        path: "allspecialities",
        element: <PrivateRouter><AdminRouter><AdminSpecialities /></AdminRouter></PrivateRouter>,
      },
      {
        path: "/dashboard/userAppointment",
        element: <PrivateRouter><UserAppointment /></PrivateRouter>,
      },
      {
        path: "/dashboard/timeScedule",
        element: <PrivateRouter><DoctorRouter><DoctorTimeScedule /></DoctorRouter></PrivateRouter>,
      },
      {
        path: "/dashboard/prescrption",
        element: <PrivateRouter><DoctorRouter><DoctorPrescription /></DoctorRouter></PrivateRouter>,
      },
      {
        path: "/dashboard/userPrescrption",
        element: <PrivateRouter><PrescriptionUser /></PrivateRouter>,
      },
      {
        path: "/dashboard/allreviews",
        element: <PrivateRouter><AdminRouter><AdminAllReview /></AdminRouter></PrivateRouter>,
      },
      {
        path: "/dashboard/doctorlive",
        element: <PrivateRouter><DoctorRouter><DoctorLive /></DoctorRouter></PrivateRouter>,
      },
      {
        path: "/dashboard/alldoctorlive",
        element: <PrivateRouter><AdminRouter><AdminAllLive /></AdminRouter></PrivateRouter>,
      },
    ],
  },
]);

export default router;
