import PropTypes from 'prop-types';
import useAdmin from '../Hooks/useAdmin';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';


const AdminRouter = ({ children }) => {

    const user = useSelector((state) => state.auth.user);
    const isLoading = useSelector((state) => state.auth.loading);
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (isLoading || isAdminLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-dots loading-lg "></span>
            </div>
        )
    }

    if (user && isAdmin) {
        return children
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

AdminRouter.propTypes = {
    children: PropTypes.node,
}

export default AdminRouter;