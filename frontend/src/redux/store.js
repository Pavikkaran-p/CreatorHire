import { configureStore } from "@reduxjs/toolkit"; 
import JobDataReducer from "./dataSlice";
export const store = configureStore({
    reducer: {
        jobdata: JobDataReducer,  
    },
})