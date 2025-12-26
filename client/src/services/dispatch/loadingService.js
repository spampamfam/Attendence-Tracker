import store from "../../app/store";
import { startLoading, stopLoading, setLoading } from "../slice/loadingSlice";

export const loadingService = {
  start: () => store.dispatch(startLoading()),
  stop: () => store.dispatch(stopLoading()),
  set: (v) => store.dispatch(setLoading(v)),
};
