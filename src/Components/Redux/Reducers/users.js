import { SHOW_USERS } from "../Actions";
import users from "../../../datas/users.json";
const initialState = {
  users: users,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_USERS:
      return {
        ...state,
        users: [action.payload],
      };
    default:
      return state;
  }
};
export default userReducer;
