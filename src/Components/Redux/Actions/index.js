export const GET_USERS_FETCH = "GET_USERS_FETCH";
export const GET_ARTISTS_FETCH = "GET_ARTISTS_FETCH";
export const GET_ACTIVITIES_FETCH = "GET_ACTIVITIES_FETCH";
export const GET_ARTICLES_FETCH = "GET_ARTICLES_FETCH";
export const GET_EVENTS_FETCH = "GET_EVENTS_FETCH";
export const GET_CANDIDATURE_FETCH = "GET_CANDIDATURE_FETCH";
export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const SET_FILTER = "SET_FILTER";

export const setFilterAction = (payload) => {
  return {
    type: SET_FILTER,
    payload: payload,
  };
};
export const logInAction = (payload) => {
  return {
    type: LOG_IN,
    payload: payload,
  };
};
export const logOutAction = () => {
  return {
    type: LOG_OUT,
  };
};
export const getCandidatureAction = () => {
  return (dispatch) => {
    fetch(`http://localhost:3000/candidature`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error while getting the datas");
        }
      })
      .then((datas) => {
        dispatch({
          type: GET_CANDIDATURE_FETCH,
          payload: datas,
        });
      })
      .catch((err) => {
        console.log("error:", err);
      });
  };
};
export const getUsersAction = () => {
  return (dispatch) => {
    fetch(`http://localhost:3000/users`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error while getting the datas");
        }
      })
      .then((datas) => {
        dispatch({
          type: GET_USERS_FETCH,
          payload: datas,
        });
      })
      .catch((err) => {
        console.log("error:", err);
      });
  };
};
export const getEventsAction = () => {
  return (dispatch) => {
    fetch(`http://localhost:3000/events`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error while getting the datas");
        }
      })
      .then((datas) => {
        dispatch({
          type: GET_EVENTS_FETCH,
          payload: datas,
        });
      })
      .catch((err) => {
        console.log("error:", err);
      });
  };
};

export const getArtistsAction = () => {
  return (dispatch) => {
    fetch(`http://localhost:3000/artists`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error while getting the datas");
        }
      })
      .then((datas) => {
        dispatch({
          type: GET_ARTISTS_FETCH,
          payload: datas,
        });
      })
      .catch((err) => {
        console.log("error:", err);
      });
  };
};
export const getActivitiesAction = () => {
  return (dispatch) => {
    fetch(`http://localhost:3000/activities`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error while getting the datas");
        }
      })
      .then((datas) => {
        dispatch({
          type: GET_ACTIVITIES_FETCH,
          payload: datas,
        });
      })
      .catch((err) => {
        console.log("error:", err);
      });
  };
};
export const getArticlesAction = () => {
  return (dispatch) => {
    fetch(`http://localhost:3000/articles`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error while getting the datas");
        }
      })
      .then((datas) => {
        dispatch({
          type: GET_ARTICLES_FETCH,
          payload: datas,
        });
      })
      .catch((err) => {
        console.log("error:", err);
      });
  };
};
