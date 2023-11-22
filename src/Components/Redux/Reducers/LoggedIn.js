import { LOG_IN, LOG_OUT } from "../Actions";
const initialState = {
  user: [],
  isLogged: false,
};

const LoggedIn = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        user: [action.payload],
        isLogged: true,
      };
    case LOG_OUT:
      return {
        ...state,
        user: [],
        isLogged: false,
      };
    default:
      return state;
  }
};
export default LoggedIn;
