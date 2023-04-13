import { configureStore } from "@reduxjs/toolkit"
import authSlice from "../store/features/accountSlice.js"
import likeSlice from "./features/likeSlice.js"

export const store = configureStore({
	reducer:{
        auth : authSlice,
        favoris : likeSlice
    }
})