import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import MyFetches from "../Reducers/MyFetches";
import LoggedIn from "../Reducers/LoggedIn";

const combinedReducers = combineReducers({
  MyFetches,
  LoggedIn,
});

const store = configureStore({
  reducer: combinedReducers,
});
export default store;
