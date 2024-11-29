import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../Redux/UserSlice'
export const Store = configureStore({
    reducer:{
        users:userReducer
    }
})




