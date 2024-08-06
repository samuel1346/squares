import { configureStore } from "@reduxjs/toolkit";
import {btnSlice} from "./btnSlice/btnSlice";

export default configureStore({
    reducer : {
        btn : btnSlice.reducer
    }
})