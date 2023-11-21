import { SHOW_ACTIVITIES } from "../Actions";
import activities from "../../../datas/activities.json";
const initialState = {
  activities: activities,
};

const activitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ACTIVITIES:
      return {
        ...state,
        activities: [action.payload],
      };
    default:
      return state;
  }
};

export default activitiesReducer;
