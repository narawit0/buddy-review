import {useDispatch, useSelector} from 'react-redux';
import { useEffect, useState } from "react";
import {getRestaurantsAsync, selectRestaurants} from "../store/reservation/reservationSlice";
import RestaurantList from "../components/RestaurantList";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchContainerStyled = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchInputStyled = styled.input`
  width: 60%;
  margin: 0 auto;
  padding: .2rem;
  margin-bottom: .5rem;
`

function Reservation() {
    const dispatch = useDispatch();
    const [storeName, setStoreName] = useState("")

    useEffect(() => {
        dispatch(getRestaurantsAsync());
    }, []);

    const handleSubmit = () => {
        dispatch(getRestaurantsAsync(storeName));
    }

    return (
        <Container>
            <h1>Let's reserve it</h1>
            <SearchContainerStyled>
                <SearchInputStyled
                    placeholder="Search The Restaurant"
                    value={storeName}
                    onInput={(e) => {
                        setStoreName(e.target.value)
                    }}
                />
                <button onClick={(e) => {
                    e.preventDefault()
                    handleSubmit();
                }}>Search</button>
            </SearchContainerStyled>
            <RestaurantList />
        </Container>
    )
}

export default Reservation;