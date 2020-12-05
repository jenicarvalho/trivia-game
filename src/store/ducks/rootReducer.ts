import { combineReducers } from "redux";

import questions from "./questions";

const createRootReducer = () => combineReducers({
  questions
});

export default createRootReducer;
