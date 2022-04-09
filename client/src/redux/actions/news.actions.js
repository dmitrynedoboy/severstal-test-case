import {
  INIT_NEWS_START,
  INIT_NEWS_SUCCESS,
  INIT_NEWS_ERROR,
} from "../action.types";

// старт запроса новостей
export const initNewsStart = (news) => ({
  type: INIT_NEWS_START,
});

// пишем новости в стэйт
export const initNews = (news) => ({
  type: INIT_NEWS_SUCCESS,
  payload: news,
});

// пишем ошибку в стэйт
export const initNewsError = (error) => ({
  type: INIT_NEWS_ERROR,
  payload: error,
});
