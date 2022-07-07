import { Navigate, Outlet, useLocation, matchRoutes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {selectUser} from "../store/auth/authSlice";

function AuthLayout() {
    const user = useSelector(selectUser);

    return (
        <>
            {user ? <Outlet /> : <Navigate to="/login" />}
        </>
    )
}

export default AuthLayout;