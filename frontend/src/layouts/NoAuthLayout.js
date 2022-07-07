import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {selectUser} from "../store/auth/authSlice";

function NoAuthLayout() {
    const user = useSelector(selectUser);

    return user ? <Navigate to="/reservation" /> : <Outlet />
}

export default NoAuthLayout;