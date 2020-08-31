import axios from "axios";

export const FETCHING_MOVIES_START = "FETCHING_MOVIES_START";
export const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
export const fetchMovies = () => (dispatch) => {
  dispatch({ type: FETCHING_MOVIES_START });

  axios
    .get("https://ghibliapi.herokuapp.com/films")
    .then((res) => {
      dispatch({ type: FETCH_MOVIES_SUCCESS, payload: res.data });
    })
    .catch((err) => console.log(err));
};

const thunk = (store) => (next) => (action) => {
  if (typeof action === "object") {
    next(action);
  } else if (typeof action === "function") {
    action(store.dispatch);
  }
};
