export const GET_USERS_FETCH = "GET_USERS_FETCH";
export const GET_ARTISTS_FETCH = "GET_ARTISTS_FETCH";
export const GET_ACTIVITIES_FETCH = "GET_ACTIVITIES_FETCH";
export const GET_ARTICLES_FETCH = "GET_ARTICLES_FETCH";

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
