import { fork, take, call, cancel, put } from "redux-saga/effects";
import { delay } from "redux-saga";

export function* getSearch(q) {
  let task;
  console.log("getSearch == == = =");
  // Start a worker listening for `SET_SEARCH` actions.
  while (true) {
    // Read the query from the action
    const q = yield take("REQUEST_SEARCH_DATA");

    // If there is any pending search task then cancel it
    if (task) {
      yield cancel(task);
    }

    // Create a worker to proceed search
    task = yield fork(handleSearch, q);
  }
}

function* handleSearch(q) {
  console.log("handleSearch == == = =", q.filter);
  let data = {};
  // Debounce by 1s. This will lock the process for one second before
  // performing its logic. Since the process is blocked, it can be cancelled
  // by `watchSearch` if there are any other actions.
  yield call(delay, 100);

  data = q.data.filter(function(item) {
    return item.original_title.toLowerCase().search(q.filter) !== -1;
  });

  // Dispatch an action to notify the UI
  yield put({ type: "RECEIVE_POPULAR_DATA", data });
}
