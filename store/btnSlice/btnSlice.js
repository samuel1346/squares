import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    buttonName : 'button',
    buttonState: false,
}

export const btnSlice = createSlice({
    name: 'btn',
    initialState: initialState,
    reducers:{
        setBtn: (state, action)=>{
            state.buttonName = action.payload.buttonName;
            state.buttonState = action.payload.buttonState
        }
    }
})

export const {setBtn} = btnSlice.actions;
export default btnSlice.reducer;