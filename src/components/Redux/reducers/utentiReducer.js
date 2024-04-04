import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    utenti:[]
}

const utentiSlice = createSlice({
    name: "utenti",
    initialState: initialState,
    reducers: {
        setUtenti: (state, action) => {
            state.utenti = action.payload //Con payload aggiungo una nuova nota allo stato delle note
        }
    }
})


export const {setUtenti} = utentiSlice.actions
export default utentiSlice.reducer