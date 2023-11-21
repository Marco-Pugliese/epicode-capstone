import { SHOW_ARTICLES } from "../Actions";
import articles from "../../../datas/articles.json";
const initialState = {
  articles: articles,
};

const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ARTICLES:
      return {
        ...state,
        articles: [action.payload],
      };
    default:
      return state;
  }
};

export default articlesReducer;
