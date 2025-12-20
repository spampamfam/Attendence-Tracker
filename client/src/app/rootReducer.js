import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import taskSliceReducer from "../services/slice/taskSlice";
import addCourseModalReducer from "../services/slice/addCourseModalSlice";
import viewCourseModalReducer from "../services/slice/viewCourseModalSlice";
import confirmModalReducer from "../services/slice/confirmModalSlice";
import editCourseModalReducer from "../services/slice/editCourseModalSlice";

const rootReducer = combineReducers({
  //data flow
  auth: authReducer,
  tasks: taskSliceReducer,

  //modal views
  addCourseModal: addCourseModalReducer,
  viewCourseModal: viewCourseModalReducer,
  confirmModal: confirmModalReducer,
  editCourseModal: editCourseModalReducer,
});

export default rootReducer;
