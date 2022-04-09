import { all, call } from "redux-saga/effects";
import { watchNews } from "./news.saga";
import { watchUser } from "./user.saga";

export function* rootSaga() {
  yield all([call(watchNews), call(watchUser)]);
}
