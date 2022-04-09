import {
  INIT_USER_SUCCESS,
  INIT_USER_ERROR,
  DESTROY_USER,
} from "../action.types";

export function userReducer(state = {}, action) {
  const { type } = action;

  switch (type) {
    case INIT_USER_SUCCESS: {
      const { payload: user } = action;
      return { value: user, error: null };
    }

    case INIT_USER_ERROR: {
      const { payload: error } = action;
      return { ...state, error };
    }

    case DESTROY_USER: {
      return {
        value: "",
        error: null,
      };
    }

    default: {
      return state;
    }
  }
}
