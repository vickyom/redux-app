import { combineReducers } from "redux";
import popularMoviesRed from "./popularMoviesRed";
import searchRed from "./searchRed";

export default combineReducers({
  popularMoviesRed,
  searchRed,
});
