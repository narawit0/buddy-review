import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from "react";
import {fetchReservationLogsAsync} from "../store/reservation/reservationSlice";
import styled from "styled-components";
import ReservationHistoryList from "../components/ReservationHistoryList";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function ReservationLogs() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchReservationLogsAsync());
    }, []);

    return (
        <Container>
            <h1>Reservation History</h1>
            <ReservationHistoryList />
        </Container>
    )
}

export default ReservationLogs;