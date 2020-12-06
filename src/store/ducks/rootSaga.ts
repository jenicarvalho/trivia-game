import { all, takeLatest } from "redux-saga/effects"

import { QuestionsTypes } from "./questions/types"
import { getQuestions } from "./questions/sagas"

export default function* rootSaga() {
  return yield all([
    takeLatest(QuestionsTypes.GET_QUESTIONS_REQUEST, getQuestions),
  ])
}
