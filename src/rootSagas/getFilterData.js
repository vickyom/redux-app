import { put } from "redux-saga/effects";

export function* getFilterData(filData) {
  try {
    let data = {};
    if (filData.filter === "RL") {
      data = filData.data.slice().sort((first, second) => {
        return parseFloat(first.vote_average) - parseFloat(second.vote_average);
      });
    } else if (filData.filter === "RH") {
      data = filData.data.slice().sort((first, second) => {
        return parseFloat(second.vote_average) - parseFloat(first.vote_average);
      });
    } else {
      data = filData.data;
    }
    console.log(data);

    yield put({ type: "RECEIVE_POPULAR_DATA", data });
  } catch (e) {
    console.log(e);
  }
}
