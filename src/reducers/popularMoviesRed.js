import { RECEIVE_POPULAR_DATA } from "../actionType";

export default (state = { popMovies: [] }, { type, data }) => {
  switch (type) {
    case RECEIVE_POPULAR_DATA:
      return { ...state, popMovies: data };
    default:
      return state;
  }
};
