import store from "../../app/store";
import { setOpen, setClose } from "../slice/confirmModalSlice";

export const confirmModalService = {
  setOpen: () => {
    store.dispatch(setOpen());
  },
  setClose: () => {
    store.dispatch(setClose());
  },
};
