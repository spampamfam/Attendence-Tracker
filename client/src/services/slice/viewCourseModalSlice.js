import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  open: false,
  id: null,
};

const viewCourseModalSlice = createSlice({
  name: "viewCourseModal",
  initialState,
  reducers: {
    setOpen: (state, action) => {
      state.open = true;
      state.id = action.payload;
    },
    setClose: (state) => {
      state.open = false;
      state.id = null;
    },
  },
});

export const { setOpen, setClose } = viewCourseModalSlice.actions;

export default viewCourseModalSlice.reducer;
