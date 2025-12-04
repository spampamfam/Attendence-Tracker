import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  open: false,
};

const editCourseModalSlice = createSlice({
  name: "editCourseModal",
  initialState,
  reducers: {
    setOpen: (state, action) => {
      state.open = true;
    },
    setClose: (state) => {
      state.open = false;
    },
  },
});

export const { setOpen, setClose } = editCourseModalSlice.actions;

export default editCourseModalSlice.reducer;
