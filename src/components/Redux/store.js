import { configureStore } from "@reduxjs/toolkit";
import { sliceTheme } from "./themeSlice"

export default configureStore({
    reducer: {
        theme: sliceTheme,
    }
})