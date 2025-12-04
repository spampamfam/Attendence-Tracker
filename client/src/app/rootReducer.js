import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import addCourseModalReducer from "../services/slice/addCourseModalSlice";
import taskSliceReducer from "../services/slice/taskSlice";
import viewCourseModalReducer from "../services/slice/viewCourseModalSlice";
import confirmModalReducer from "../services/slice/confirmModalSlice";
import editCourseModalReducer from "../services/slice/editCourseModalSlice";
const rootReducer = combineReducers({
  auth: authReducer,
  addCourseModal: addCourseModalReducer,
  tasks: taskSliceReducer,
  viewCourseModal: viewCourseModalReducer,
  confirmModal: confirmModalReducer,
  editCourseModal: editCourseModalReducer,
});

export default rootReducer;
