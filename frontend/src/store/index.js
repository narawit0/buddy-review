import { createStore } from 'redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import reservationReducer from '../store/reservation/reservationSlice';
import AuthReducer from '../store/auth/authSlice';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const reducer = combineReducers({
    reservation: reservationReducer,
    auth: AuthReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth']
}

const persistedReducer = persistReducer(persistConfig, reducer)


export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store)
