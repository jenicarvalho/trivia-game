import { combineReducers } from "redux"

import questions from "./questions"
import answers from "./answers"
import playAgain from "./playAgain"
import user from "./user"

const createRootReducer = () => combineReducers({
  questions,
  answers,
  playAgain,
  user
})

export default createRootReducer
