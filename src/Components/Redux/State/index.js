import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import MyFetches from "../Reducers/MyFetches";
import LoggedIn from "../Reducers/LoggedIn";
import Filter from "../Reducers/Filter";

const combinedReducers = combineReducers({
  MyFetches,
  LoggedIn,
  Filter,
});

const store = configureStore({
  reducer: combinedReducers,
});
export default store;
