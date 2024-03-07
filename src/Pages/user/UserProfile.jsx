import DoctorHome from "../dashboard/doctorDashboard/doctorHome/DoctorHome";
import AdminHome from "../dashboard/adminDashboard/adminHome/AdminHome";
import UserHome from "../dashboard/userDashboard/userHome/UserHome";
import useDoctor from "../../Hooks/useDoctor";
import useAdmin from "../../Hooks/useAdmin";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const [isDoctor, isDoctorLoading] = useDoctor();
  const [isAdmin, isAdminLoading] = useAdmin();

    const isLoading = useSelector((state) => state.auth.loading);



  if (isLoading) {
    return (
        <div className="flex justify-center items-center h-screen">
            <span className="loading loading-dots loading-lg "></span>
        </div>
    )
}
  if (isDoctorLoading) {
    return (
        <div className="flex justify-center items-center h-screen">
            <span className="loading loading-dots loading-lg "></span>
        </div>
    )
}

  if (isAdminLoading) {
    return (
        <div className="flex justify-center items-center h-screen">
            <span className="loading loading-dots loading-lg "></span>
        </div>
    )
}


  return <>{isDoctor ? <DoctorHome /> : isAdmin ? <AdminHome /> : <UserHome />}</>;
};
export default UserProfile;
