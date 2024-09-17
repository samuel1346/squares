import { configureStore } from "@reduxjs/toolkit";
import {btnSlice} from "./btnSlice/btnSlice";
import { carSlice } from "./cartSlice/carSlice";
import { userSlice } from "./userSlice/userSlice";

export default configureStore({
    reducer : {
        btn : btnSlice.reducer,
        car : carSlice.reducer,
        user : userSlice.reducer
    }
})