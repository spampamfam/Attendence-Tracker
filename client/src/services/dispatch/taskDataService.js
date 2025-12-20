import store from "../../app/store";
import { fetchData, clearDate, fetchStats } from "../slice/taskSlice";

export const taskDataService = {
  fetchData: (payload) => {
    store.dispatch(fetchData(payload));
  },
  clearDate: () => {
    store.dispatch(clearDate());
  },
  fetchStats: (payload) => {
    store.dispatch(fetchStats(payload));
  },
};
