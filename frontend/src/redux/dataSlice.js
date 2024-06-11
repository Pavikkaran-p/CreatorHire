import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchJobs = createAsyncThunk("jobs/fetchJobs", async () => {
  const response =await axios.get('http://localhost:5500/api/jobs/getAllJobs')
  .then(async(data)=>{
    const data1 = await data.json();
    return data;

  })
  .catch(err=>console.log(err))
});

const initialState = {
  jobData: [],
  status: "idle",
  error: null,
};

export const dataSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        console.log(action.payload)
        state.status = "loading";
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.status = "suceeded";
        console.log(action.payload)
        state.jobData = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.status = "idle";
        console.log(action.payload)
        state.error = action.error.message;
      });
  },
});

export { fetchJobs };
export const getAllJobs = (state) => state.jobsList.jobData;

export default dataSlice.reducer;
