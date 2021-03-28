import { takeLatest, fork } from "redux-saga/effects";
import { REQUEST_POPULAR_DATA, REQUEST_FILTER_DATA } from "../actionType";
import { getPopularData } from "./getPopularData";
import { getFilterData } from "./getFilterData";
import { getSearch } from "./getSearch";

// worker Saga: will be fired on REQUEST_API_DATA actions

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export default function* mySaga() {
  console.log("Root Saga  called");
  yield takeLatest(REQUEST_POPULAR_DATA, getPopularData);
  yield takeLatest(REQUEST_FILTER_DATA, getFilterData);
  yield fork(getSearch);
}
