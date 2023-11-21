export const SHOW_ARTISTS = "SHOW ARTISTS";
export const SHOW_ARTICLES = "SHOW ARTICLES";
export const SHOW_USERS = "SHOW USERS";
export const SHOW_ACTIVITIES = "SHOW ACTIVITIES";

export const showArtistsAction = (payload) => {
  return {
    type: SHOW_ARTISTS,
    payload: payload,
  };
};

export const showArticlesAction = (payload) => {
  return {
    type: SHOW_ARTICLES,
    payload: payload,
  };
};

export const showUsersAction = (payload) => {
  return {
    type: SHOW_USERS,
    payload: payload,
  };
};

export const showActivitiesAction = (payload) => {
  return {
    type: SHOW_ACTIVITIES,
    payload: payload,
  };
};
