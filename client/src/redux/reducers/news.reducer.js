import { INIT_NEWS_SUCCESS, INIT_NEWS_ERROR } from "../action.types";

export function newsReducer(state = {}, action) {
  const { type } = action;

  switch (type) {
    case INIT_NEWS_SUCCESS: {
      const { payload: news } = action;
      return { values: news, error: null };
    }

    case INIT_NEWS_ERROR: {
      const { payload: error } = action;
      return { ...state, error };
    }

    default: {
      return state;
    }
  }
}
