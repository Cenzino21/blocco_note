import { createSlice } from '@reduxjs/toolkit'

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: "light"
  },
  reducers: {
    setDark: (state) => {
      state.value = "dark"
    }, 
    setLight: (state) => {
      state.value = "light"
    }
  }
})

export const { setDark, setLight} = themeSlice.actions

export const sliceTheme = themeSlice.reducer