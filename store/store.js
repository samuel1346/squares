import { configureStore } from "@reduxjs/toolkit";
import {btnSlice} from "./btnSlice/btnSlice";
import { carSlice } from "./cartSlice/carSlice";

export default configureStore({
    reducer : {
        btn : btnSlice.reducer,
        car : carSlice.reducer
    }
})