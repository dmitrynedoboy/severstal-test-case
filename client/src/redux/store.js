import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./reducers/root.reducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import { rootSaga } from "./sagas/root.saga";

const initialState = {
  news: {
    values: [],
    error: null,
  },
  user: {},
};

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
