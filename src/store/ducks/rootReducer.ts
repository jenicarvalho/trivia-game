import { combineReducers } from "redux"

import questions from "./questions"
import answers from "./answers"

const createRootReducer = () => combineReducers({
  questions,
  answers
})

export default createRootReducer
