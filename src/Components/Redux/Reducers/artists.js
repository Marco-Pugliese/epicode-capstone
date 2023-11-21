import { SHOW_ARTISTS } from "../Actions";
import artists from "../../../datas/artists.json";
const initialState = {
  artists: artists,
};

const artistReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ARTISTS:
      return {
        ...state,
        artists: [action.payload],
      };
    default:
      return state;
  }
};
export default artistReducer;
