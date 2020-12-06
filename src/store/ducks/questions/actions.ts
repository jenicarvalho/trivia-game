import { action } from "typesafe-actions"
import { QuestionsTypes, QuestionsResponse } from "./types"

export const loadQuestionsRequest = () => action(QuestionsTypes.GET_QUESTIONS_REQUEST)
export const loadQuestionsSuccess = (data: QuestionsResponse) => action(QuestionsTypes.GET_QUESTIONS_SUCCESS, data)
export const loadQuestionsFailure = () => action(QuestionsTypes.GET_QUESTIONS_FAILURE)
