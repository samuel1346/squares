import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    car : [],
}

export const carSlice = createSlice({
    name : 'car',
    initialState,
    reducers : {
        setCar:  (state, action) => {
            const existingItem = state.car.find(item => item.data.id === action.payload.data.id);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                state.car.push(action.payload);
            }
            }
    }
})

export const {setCar} = carSlice.actions;
export default carSlice.reducer;