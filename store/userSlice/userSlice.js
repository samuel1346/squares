import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mail : '',

}

export const userSlice=  createSlice({
    name: 'user',
    initialState,
    reducers :{
        setUser: (state, action) =>{
            state.mail = action.payload.mail
        }
    }
})

export const {setUser} = userSlice.actions
export default userSlice.reducer;