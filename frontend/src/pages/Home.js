import { useSelector, useDispatch } from 'react-redux';
import {getRestaurants, selectRestaurants, deleteRestaurants, getRestaurantsAsync} from "../store/reservation/reservationSlice";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`

const LinkStyled = styled(Link)`
  
`;

function Home() {
    return (
        <Container>
            <h1>Welcome to Restaurant Reservation Platform</h1>
            <LinkStyled to="/reservation">Place a reservation</LinkStyled>
        </Container>
    )
}

export default Home;