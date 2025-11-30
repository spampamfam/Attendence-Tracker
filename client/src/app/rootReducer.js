import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import addCourseModalReducer from "../services/slice/addCourseModalSlice";
import taskSliceReducer from "../services/slice/taskSlice";
import viewCourseModalSliceReducer from "../services/slice/viewCourseModalSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  addCourseModal: addCourseModalReducer,
  tasks: taskSliceReducer,
  viewCourseModal: viewCourseModalSliceReducer,
});

export default rootReducer;
