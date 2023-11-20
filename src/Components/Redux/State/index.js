import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

const combinedReducers = combineReducers({});

const store = configureStore({
  reducer: combinedReducers,
});
export default store;
