import DoctorHome from "../dashboard/doctorDashboard/doctorHome/DoctorHome";
import AdminHome from "../dashboard/adminDashboard/adminHome/AdminHome";
import UserHome from "../dashboard/userDashboard/userHome/UserHome";
import useDoctor from "../../Hooks/useDoctor";
import useAdmin from "../../Hooks/useAdmin";

const UserProfile = () => {
  const [isDoctor] = useDoctor();
  const [isAdmin] = useAdmin();

  return <>{isDoctor ? <DoctorHome /> : isAdmin ? <AdminHome /> : <UserHome />}</>;
};
export default UserProfile;
