import { takeEvery, call, put } from "redux-saga/effects";
import { INIT_NEWS_START } from "../action.types";
import { initNews, initNewsError } from "../actions/news.actions";
import { getDataFromApi } from "../../utils/getDataFromApi";

// получение новостей с сервера и обновление стэйта
function* getNews() {
  try {
    const news = yield call(
      getDataFromApi,
      `${process.env.REACT_APP_API_URL}/news`
    ); // запрос к базе данных
    if (news) {
      yield put(initNews(news)); // пишем новости в стэйт
    } else {
      yield put(initNewsError("Ошибка сервера, попробуйте позже")); // пишем ошибку в стэйт
    }
  } catch (err) {
    console.log(err);
  }
}

// watcher
export function* watchNews() {
  yield takeEvery(INIT_NEWS_START, getNews);
}
