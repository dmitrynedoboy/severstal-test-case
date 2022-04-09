import {
  INIT_USER_START,
  INIT_USER_SUCCESS,
  INIT_USER_ERROR,
  DESTROY_USER_START,
  DESTROY_USER,
} from "../action.types";

// старт аутентификации пользователя
export const initUserStart = (user) => ({
  type: INIT_USER_START,
  payload: user,
});

// запрос в базу
export const loginUser = (user) => ({
  type: INIT_USER_SUCCESS,
  payload: user,
});

// запись ошибки
export const loginError = (error) => ({
  type: INIT_USER_ERROR,
  payload: error,
});

// старт выхода пользователя
export const logoutUserStart = () => ({
  type: DESTROY_USER_START,
});

// выход пользователя
export const logoutUser = () => ({
  type: DESTROY_USER,
});
