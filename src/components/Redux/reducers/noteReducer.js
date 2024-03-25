import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    note:[]
}

const noteSlice = createSlice({
    name: "note",
    initialState: initialState,

    reducers: {
        setNote: (state, action) => {
            state
        }
    }
})

