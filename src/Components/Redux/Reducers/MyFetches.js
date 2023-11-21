import {
  GET_ACTIVITIES_FETCH,
  GET_ARTICLES_FETCH,
  GET_ARTISTS_FETCH,
  GET_USERS_FETCH,
} from "../Actions";
const initialState = {
  users: {},
  artists: {},
  articles: {},
  activities: {},
};

const myFetch = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_FETCH:
      return {
        ...state,
        users: action.payload,
      };
    case GET_ARTISTS_FETCH:
      return {
        ...state,
        artists: action.payload,
      };
    case GET_ACTIVITIES_FETCH:
      return {
        ...state,
        activities: action.payload,
      };
    case GET_ARTICLES_FETCH:
      return {
        ...state,
        articles: action.payload,
      };
    default:
      return state;
  }
};
export default myFetch;
