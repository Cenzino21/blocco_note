import { createSlice } from "@reduxjs/toolkit";

//Definizione dello stato iniziale, in questo caso un array vuoto
const initialState = {
    note:[]
}

const noteSlice = createSlice({
    name: "note",
    initialState: initialState,

    reducers: {
        setNote: (state, action) => {
            state.note.push(action.payload) //Con payload aggiungo una nuova nota allo stato delle note
        }
    }
})

export const {setNote} = noteSlice.actions

/*
import { createSlice } from '@reduxjs/toolkit'
import { DARK } from '../../utils/themeConst';

const initialState={
  value: DARK
};
const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: "light"
  },
  initialState: initialState, 
  reducers: {
    setDark: (state) => {
      state.value = "dark"
    }, 
    setLight: (state) => {
      state.value = "light"
    changeTheme: (state, action) => {console.log(action)
      state.value = action.payload //Per il tipo del valore dello state
    }
  }
})

export const { setDark, setLight} = themeSlice.actions
export const {changeTheme} = themeSlice.actions */

