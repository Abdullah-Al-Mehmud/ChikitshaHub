
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";


const PrivateRouter = ({children}) => {

    const user = useSelector((state) => state.auth.user);
    const isLoading = useSelector((state) => state.auth.loading);
    const location = useLocation();


    if(isLoading){
        return (
        <div className="flex justify-center items-center h-screen">
        <span className="loading loading-dots loading-lg "></span>
      </div>
      )}

    if(user){
        return children
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

PrivateRouter.propTypes = {
    children: PropTypes.node,
}

export default PrivateRouter;