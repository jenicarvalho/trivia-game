import { action } from "typesafe-actions"
import { AnswersTypes, Answers } from "./types"

export const setAnswers = (answers: Answers) => action(AnswersTypes.SET_ANSWERS, answers)
export const getAnswers = (answers: Answers) => action(AnswersTypes.GET_ANSWERS, answers)
