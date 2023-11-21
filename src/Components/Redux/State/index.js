import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import activities from "../Reducers/activities";
import articles from "../Reducers/articles";
import artists from "../Reducers/artists";
import users from "../Reducers/users";

const combinedReducers = combineReducers({
  users,
  artists,
  articles,
  activities,
});

const store = configureStore({
  reducer: combinedReducers,
});
export default store;
