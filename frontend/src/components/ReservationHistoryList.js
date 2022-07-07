import { useSelector } from "react-redux";
import {selectReservationLogs} from "../store/reservation/reservationSlice";
import styled from "styled-components";
import "./reservation-log.css";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 60%;
  padding: 1rem;
`;

const ReservationListStyled = styled.ul`
    padding: .2rem;
`

const ReservationItemStyled = styled.li`
  list-style: none;
  padding: .5rem;
  cursor: pointer;
  margin-bottom: .5rem;
`

function ReservationHistoryList() {
    const reservationLogs = useSelector(selectReservationLogs);

    const renderReservationLogs = () => {
        const htmls = [];

        reservationLogs.map((reservation, index) => {
            const html = (
                <ReservationItemStyled className={reservation.status === 'reserved' ? "reserved" : "cancelled" }>
                    {index+1}.{reservation.status} {reservation.store_name} {reservation.duration}
                </ReservationItemStyled>
            )

            htmls.push(html);
        })

        return htmls;
    }



    return (
        <Container>
            <ReservationListStyled>
                {reservationLogs.length ? renderReservationLogs() : null}
            </ReservationListStyled>
        </Container>
    )
}

export default ReservationHistoryList;