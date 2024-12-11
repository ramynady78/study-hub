import { configureStore } from "@reduxjs/toolkit";
import coursesSlice from "./slices/courses-slice"
import registerCourse from "./slices/register-course"
export const store = configureStore({
    reducer:{
        courses:coursesSlice,
        register:registerCourse,
    }
})