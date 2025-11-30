import store from "../../app/store";
import { fetchData, clearDate } from "../slice/taskSlice";

export const taskDataService = {
  fetchData: (payload) => {
    store.dispatch(fetchData(payload));
  },
  clearDate: () => {
    store.dispatch(clearDate());
  },
};
