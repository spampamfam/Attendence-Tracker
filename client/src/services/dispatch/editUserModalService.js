import store from "../../app/store";
import { setOpen, setClose } from "../slice/editUserModalSlice";

export const editUserModalService = {
  setOpen: () => {
    store.dispatch(setOpen());
  },
  setClose: () => {
    store.dispatch(setClose());
  },
};
