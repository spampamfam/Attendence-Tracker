import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  open: false,
};

const confirmModalSlice = createSlice({
  name: "confirmModal",
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

export const { setOpen, setClose } = confirmModalSlice.actions;

export default confirmModalSlice.reducer;
