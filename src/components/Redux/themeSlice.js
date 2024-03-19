import { createSlice } from '@reduxjs/toolkit'
import { DARK } from '../../utils/themeConst';

const initialState={
  value: DARK
};
const themeSlice = createSlice({
  name: 'theme',
  initialState: initialState, 
  reducers: {
    changeTheme: (state, action) => {console.log(action)
      state.value = action.payload //Per il tipo del valore dello state
    }
  }
})

export const {changeTheme} = themeSlice.actions

export default themeSlice.reducer