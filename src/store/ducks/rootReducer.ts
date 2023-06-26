import { combineReducers } from "redux"

import questions from "./questions"
import answers from "./answers"
import playAgain from "./playAgain"

const createRootReducer = () => combineReducers({
  questions,
  answers,
  playAgain,
})

export default createRootReducer
