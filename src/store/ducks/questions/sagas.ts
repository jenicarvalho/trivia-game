import { call, put } from "redux-saga/effects"

import { loadQuestionsSuccess, loadQuestionsFailure } from "./actions"
import { QuestionsResponse } from "./types"

import QuestionsService from "../../../services/questions-service"

export function* getQuestions() {
  try {
    const response: QuestionsResponse = yield call(QuestionsService.getQuestions)
    yield put(loadQuestionsSuccess(response))
  } catch (err) {
  
    console.log(err)
    yield put(loadQuestionsFailure())
  }
}
