import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import taskSliceReducer from "../services/slice/taskSlice";
import loadingReducer from "../services/slice/loadingSlice";
import addCourseModalReducer from "../services/slice/addCourseModalSlice";
import viewCourseModalReducer from "../services/slice/viewCourseModalSlice";
import confirmModalReducer from "../services/slice/confirmModalSlice";
import editCourseModalReducer from "../services/slice/editCourseModalSlice";
import editUserModalReducer from "../services/slice/editUserModalSlice";

const rootReducer = combineReducers({
  //data flow
  auth: authReducer,
  tasks: taskSliceReducer,
  loading: loadingReducer,

  //modal views
  addCourseModal: addCourseModalReducer,
  viewCourseModal: viewCourseModalReducer,
  confirmModal: confirmModalReducer,
  editCourseModal: editCourseModalReducer,
  editUserModal: editUserModalReducer,
});

export default rootReducer;
