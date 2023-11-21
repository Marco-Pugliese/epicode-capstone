import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import MyFetches from "../Reducers/MyFetches";

const combinedReducers = combineReducers({
  MyFetches,
});

const store = configureStore({
  reducer: combinedReducers,
});
export default store;
