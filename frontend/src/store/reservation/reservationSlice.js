import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {fetchReservationLogs, fetchRestaurants, reserveRestaurant} from "./reservationAPI";


const initialState = {
    restaurants: [],
    reservation_logs: [],
    status: "idle"
};

export const getRestaurantsAsync = createAsyncThunk(
    'reservation/fetchRestaurants',
    async (storeName = "") => {
        const response = await fetchRestaurants(storeName);
        // The value we return becomes the `fulfilled` action payload
        return response.data.data
    }
);

export const reserveRestaurantAsync = createAsyncThunk(
    'reservation/reserveRestaurant',
    async (data, {dispatch}) => {
        const response = await reserveRestaurant(data);

        dispatch(getRestaurantsAsync());
        return response.data;
    }
)

export const fetchReservationLogsAsync = createAsyncThunk(
    'reservation/fetchReservationLogs',
    async (data, {dispatch}) => {
        const response = await fetchReservationLogs();

        return response.data.data;
    }
)

export const selectRestaurants = (state) => state.reservation.restaurants;
export const selectReservationLogs = (state) => state.reservation.reservation_logs;

export const reservationSlice = createSlice({
    name: 'reservation',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    extraReducers: (builder) => {
        builder
            .addCase(getRestaurantsAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.restaurants = action.payload;
            })
            .addCase(fetchReservationLogsAsync.fulfilled, (state, action) => {
                state.reservation_logs = action.payload;
            });

    },
});

// export const { getRestaurants, deleteRestaurants } = reservationSlice.actions;

export default reservationSlice.reducer;
