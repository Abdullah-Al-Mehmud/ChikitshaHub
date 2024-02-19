import { useQuery } from "@tanstack/react-query";
import useAxiosPrivet from "./useAxiosPrivet";
import { useSelector } from "react-redux";

const useDoctor = () => {
  const user = useSelector((state) => state.auth.user);
  const isLoading = useSelector((state) => state.auth.loading);
  const axios = useAxiosPrivet();
  console.log(user);
  const { data: isDoctor, isPending: isDoctorLoading } = useQuery({
    queryKey: [user?.email, "isDoctor"],
    enabled: !isLoading,
    queryFn: async () => {
      const res = await axios.get(`/users/doctors/${user?.email}`);
      return res?.data?.isDoctor;
    },
  });
  return [isDoctor, isDoctorLoading];
};

export default useDoctor;
