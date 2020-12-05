import { createStore, Store, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history"

const history = createBrowserHistory();

import createRootReducer from './ducks/rootReducer';
import rootSaga from "./ducks/rootSaga";

import { QuestionsState } from "./ducks/questions/types";

export interface ApplicationState {
  questions: QuestionsState;
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [
  sagaMiddleware
];

const store: Store<ApplicationState> = createStore(
  createRootReducer(history),
  composeEnhancers(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);

export default store;
