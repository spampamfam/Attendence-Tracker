import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  open: false,
};

const editUserModalSlice = createSlice({
  name: "editUserModal",
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

export const { setOpen, setClose } = editUserModalSlice.actions;

export default editUserModalSlice.reducer;
