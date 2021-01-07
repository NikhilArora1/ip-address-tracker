import { configureStore } from '@reduxjs/toolkit';
import ipInfoReducer from './features/ipInfoSlice';

export default configureStore({
    reducer: {
        ipInfo: ipInfoReducer
    }
});