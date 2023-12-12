import { SET_FILTER } from "../Actions";
const initialState = {
  filter: "",
};

const Filter = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        filter: [action.payload],
      };

    default:
      return state;
  }
};
export default Filter;
