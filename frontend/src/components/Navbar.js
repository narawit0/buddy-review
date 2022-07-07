import styled from "styled-components";
import {useDispatch, useSelector} from 'react-redux';
import { selectUser } from "../store/auth/authSlice";
import {Link, Navigate} from "react-router-dom";
import { logout } from '../store/auth/authSlice'

const NavStyled = styled.nav`
  width: 100%;
  display: flex;
  justify-content: right;
  background-color: orangered;
`
const NavContainerStyled = styled.ul`
  padding: .5rem;
  display: flex;
`

const NavItemStyled = styled.li`
  list-style: none;
  padding: 1rem;
  color: #FFF;
`

const LinkStyled = styled(Link)`
  cursor: pointer;
`

function Navbar() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());

        return <Navigate to="/" />
    }

    const renderNavbar = () => {
        if (user) {
            return <>
                <NavItemStyled>{user.username}</NavItemStyled>
                <NavItemStyled><LinkStyled to="/reservation" >Reservation</LinkStyled></NavItemStyled>
                <NavItemStyled><LinkStyled to="/reservation/logs">History</LinkStyled></NavItemStyled>
                <NavItemStyled onClick={handleLogout}>Logout</NavItemStyled>
            </>
        } else {
            return <NavItemStyled><LinkStyled to="/login">Login</LinkStyled></NavItemStyled>
        }
    }

    return (
        <NavStyled>
            <NavContainerStyled>
                {renderNavbar()}
            </NavContainerStyled>
        </NavStyled>
    )
}

export default Navbar;