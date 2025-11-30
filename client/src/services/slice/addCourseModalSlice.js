import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  open: false,
};

const addCourseModalSlice = createSlice({
  name: "addCourseModal",
  initialState,
  reducers: {
    setOpen: (state) => {
      state.open = true;
    },
    setClose: (state) => {
      state.open = false;
    },
  },
});

export const { setOpen, setClose } = addCourseModalSlice.actions;

export default addCourseModalSlice.reducer;
