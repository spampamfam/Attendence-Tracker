import store from "../../app/store";
import { setOpen, setClose } from "../slice/addCourseModalSlice";

export const addCourseModalService = {
  setOpen: () => {
    store.dispatch(setOpen());
  },
  setClose: () => {
    store.dispatch(setClose());
  },
};
