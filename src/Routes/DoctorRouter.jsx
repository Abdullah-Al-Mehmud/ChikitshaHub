import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useDoctor from '../Hooks/useDoctor';


const DoctorRouter = ({ children }) => {

    const user = useSelector((state) => state.auth.user);
    const isLoading = useSelector((state) => state.auth.loading);
    const [isDoctor, isDoctorLoading] = useDoctor();
    const location = useLocation();

    if (isLoading || isDoctorLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-dots loading-lg "></span>
            </div>
        )
    }

    if (user && isDoctor) {
        return children
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

DoctorRouter.propTypes = {
    children: PropTypes.node,
}

export default DoctorRouter;