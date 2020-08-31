import { FETCHING_MOVIES_START, FETCH_MOVIES_SUCCESS } from "../actions";

const initialState = {
  movies: [],
  isLoading: false,
  error: "",
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_MOVIES_START:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movies: action.payload,
      };
    default:
      return state;
  }
};
