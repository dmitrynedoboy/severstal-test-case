import { combineReducers } from "redux";
import { newsReducer } from "./news.reducer";
import { userReducer } from "./user.reducer";

export const rootReducer = combineReducers({
  news: newsReducer,
  user: userReducer,
});
