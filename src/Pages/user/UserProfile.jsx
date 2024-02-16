import DoctorHome from "../dashboard/doctorDashboard/doctorHome/DoctorHome";
import AdminHome from "../dashboard/adminDashboard/adminHome/AdminHome";
import UserHome from "../dashboard/userDashboard/userHome/UserHome";

const UserProfile = () => {
  const doctor = false;
  const admin = true;

  return <>{doctor ? <DoctorHome /> : admin ? <AdminHome /> : <UserHome />}</>;
};
export default UserProfile;
