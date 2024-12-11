import { createSlice } from "@reduxjs/toolkit";
import { coursesDate } from "../../courses-data";


const coursesSlice = createSlice({
    name:"coursesSlice",
    initialState:coursesDate,
    reducers:{

    },


});

export  const {} = coursesSlice.actions;
export default coursesSlice.reducer