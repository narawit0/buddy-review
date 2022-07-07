import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {login} from "./authAPI";



const initialState = {
    user: null,
    status: "idle",
    errorMsg: ""
};

export const selectUser = (state) => state.auth.user;

export const loginAsync = createAsyncThunk(
    'auth/login',
    async (data) => {
        const response = await login(data);
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    }
);


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            localStorage.removeItem("token")
            state.user = null
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.fulfilled, (state, action) => {
                if (action.payload.status === 200) {
                    localStorage.setItem("token", action.payload.token);
                    state.user = action.payload.user;
                    window.location.href = "/reservation";
                }
            });
    },
});

export const { logout } = authSlice.actions;


export default authSlice.reducer;
