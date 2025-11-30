import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  lastFetch: null,
  data: null,
};

const taskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {
    fetchData: (state, action) => {
      state.lastFetch = Date.now();
      state.data = action.payload;
    },
    clearDate: (state) => {
      state.lastFetch = null;
      state.data = null;
    },
  },
});

export const { fetchData, clearDate } = taskSlice.actions;

export default taskSlice.reducer;
