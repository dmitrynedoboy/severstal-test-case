import { takeEvery, call, put } from "redux-saga/effects";
import { INIT_USER_START, DESTROY_USER_START } from "../action.types";
import { loginUser, loginError, logoutUser } from "../actions/user.actions";
import { getDataFromApi } from "../../utils/getDataFromApi";

// функция логина пользователя
function* getUser({ payload: userForm }) {
  try {
    const users = yield call(
      getDataFromApi,
      `${process.env.REACT_APP_API_URL}/users`
    ); // запрос к базе данных
    const [isUserExist] = users.filter(
      (user) =>
        user.password === userForm.password && user.username === userForm.login
    );
    if (isUserExist) {
      localStorage.setItem("username", isUserExist.username);
      yield put(loginUser(userForm.login)); // пишем пользователя в стэйт
    } else {
      yield put(loginError("Имя пользователя или пароль введены не верно")); // пишем ошибку в стэйт
    }
  } catch (err) {
    yield put(loginError("Что-то пошло не так. Повторите позже.")); // пишем ошибку в стэйт
  }
}
// функция выхода пользователя
function* signout() {
  localStorage.removeItem("username");
  yield put(logoutUser());
}
// watcher
export function* watchUser() {
  yield takeEvery(INIT_USER_START, getUser);
  yield takeEvery(DESTROY_USER_START, signout);
}
