import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./features/accountSlice.js"
import likeSlice from "./features/likeSlice.js"

export const store = configureStore({
	reducer:{
        auth : authSlice,
        favoris : likeSlice
    }
})