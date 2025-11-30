import store from "../../app/store";
import { setOpen, setClose } from "../slice/viewCourseModalSlice";

export const viewCourseModalService = {
  setOpen: (payload) => {
    store.dispatch(setOpen(payload));
  },
  setClose: () => {
    store.dispatch(setClose());
  },
};
