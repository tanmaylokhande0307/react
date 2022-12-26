import { configureStore } from "@reduxjs/toolkit";
import  Course  from "./Reducers";

const store = configureStore({
  reducer: {
    course: Course
  },
});

export default store;
