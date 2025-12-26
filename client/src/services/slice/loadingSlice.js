import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // start true so router waits for initial auth check
  loading: true,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = !!action.payload;
    },
    startLoading(state) {
      state.loading = true;
    },
    stopLoading(state) {
      state.loading = false;
    },
  },
});

export const { setLoading, startLoading, stopLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
