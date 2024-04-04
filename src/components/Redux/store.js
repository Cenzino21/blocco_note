import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./reducers/noteReducer";
import utentiReducer from "./reducers/utentiReducer";


export const store =  configureStore({
    reducer: {
        note: noteReducer,
        utenti: utentiReducer  
    }
})