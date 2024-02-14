import { useQuery } from "@tanstack/react-query";
import useAxiosPrivet from "./useAxiosPrivet";
import { useSelector } from "react-redux";


const useAdmin = () => {

    const user = useSelector((state) => state.auth.user);
    const isLoading = useSelector((state) => state.auth.loading);
    const axios = useAxiosPrivet();

    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !isLoading,
        queryFn: async () => {
            const res = await axios.get(`/users/admin/${user?.email}`)
            return res?.data?.isAdmin
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;