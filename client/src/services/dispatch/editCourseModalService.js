import store from "../../app/store";
import { setOpen, setClose } from "../slice/editCourseModalSlice";

export const editCourseModalService = {
  setOpen: () => {
    store.dispatch(setOpen());
  },
  setClose: () => {
    store.dispatch(setClose());
  },
};
