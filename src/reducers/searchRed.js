import { RECEIVE_SEARCH_DATA } from "../actionType";

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SEARCH_DATA:
      return {  ...state,  searchData: action.results};
    default:
      return state;
  }
};
