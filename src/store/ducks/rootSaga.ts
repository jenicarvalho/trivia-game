import { all, takeLatest } from "redux-saga/effects"

import { QuestionsTypes } from "./questions/types"
import { getQuestions } from "./questions/sagas"

import { UserTypes } from "./user/types"
import { getUser } from "./user/sagas"

export default function* rootSaga() {
  return yield all([
    takeLatest(QuestionsTypes.GET_QUESTIONS_REQUEST, getQuestions),
    takeLatest(UserTypes.GET_USER_REQUEST, getUser),
  ])
}
