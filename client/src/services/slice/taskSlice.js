import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: null,
  stats: null,
};

const taskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {
    fetchData: (state, action) => {
      state.data = action.payload;
    },
    clearDate: (state) => {
      state.data = null;
      state.stats = null;
    },
    fetchStats: (state, action) => {
      state.stats = action.payload;
    },
  },
});

export const { fetchData, clearDate, fetchStats } = taskSlice.actions;

export default taskSlice.reducer;
