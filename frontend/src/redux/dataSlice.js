import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobData: [],
};

export const dataSlice = createSlice({
  name: "Jobdata",
  initialState,
  reducers: {
    addData(state, action) {
      state.jobData.push(...action.payload); 
    },
  },
});

export const { addData } = dataSlice.actions;

export default dataSlice.reducer;
