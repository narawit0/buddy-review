import {useDispatch, useSelector} from "react-redux";
import {reserveRestaurantAsync, selectRestaurants} from "../store/reservation/reservationSlice";
import styled from "styled-components";
import "./restaurant-list.css";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  padding: 1rem;
`;

const RestaurantStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 5px;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
`;

const RestaurantImageStyled = styled.img`
  width: 15rem;
  height: auto;
`;

const RestaurantSlotListStyled = styled.ul`
    padding: 1rem;
`

const RestaurantSlotItemStyled = styled.li`
  list-style: none;
  padding: 1rem;
  cursor: pointer;
  margin-bottom: .5rem;
`


function RestaurantList() {
    const dispatch = useDispatch();
    const restaurants = useSelector(selectRestaurants);

    const renderRestaurants = () => {
        const htmls = [];

        restaurants.map((restaurant) => {
            const html = (
                <RestaurantStyled>
                    <h1>{restaurant.store_name}</h1>
                    <RestaurantImageStyled src={restaurant.store_image} />
                    <RestaurantSlotListStyled>
                        {renderAvailableSlot(restaurant)}
                    </RestaurantSlotListStyled>
                </RestaurantStyled>
            )

            htmls.push(html);
        })

        return htmls;
    }

    const renderAvailableSlot = (restaurant) => {
        return restaurant.available_slots.map((slot) => {
            return <RestaurantSlotItemStyled
                className={slot.status == 1 ? "available" : "unavailable"}
                onClick={() => {
                    handleReserve(restaurant.UUID, slot.slot_id);
                }}
            >
                {slot.duration}
            </RestaurantSlotItemStyled>
        })
    }

    const handleReserve = (UUID, slot_id) => {
        dispatch(reserveRestaurantAsync({
            UUID,
            slot_id
        }))
    }

    return (
        <Container>
            {restaurants.length ? renderRestaurants() : null}
        </Container>
    )
}

export default RestaurantList;