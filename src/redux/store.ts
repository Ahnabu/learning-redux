import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice"; // Adjust the import path as necessary
 
export const store = configureStore({
    reducer: {
        counter:counterReducer,
    },
})