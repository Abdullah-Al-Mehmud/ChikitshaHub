import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";


const PrivateRouter = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const user = useSelector((state) => state.auth.user);
    // const isLoading = useSelector((state) => state.auth.loading);
    const location = useLocation();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000); // 2000 milliseconds = 2 seconds

        return () => clearTimeout(timer); // Clear the timer on unmount or when component is re-rendered
    }, []); 

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