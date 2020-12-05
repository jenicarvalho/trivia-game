import { call, put } from "redux-saga/effects";

import { loadQuestionsSuccess, loadQuestionsFailure } from "./actions";
import { QuestionsResponse } from "./types";

import getQuestions from "../../../services/questions-service";

interface Action {
  type: string;
  payload: QuestionsResponse;
}

export function* getEnd2EndId(action: Action) {
  try {
    const response = yield call(getQuestions, action.payload);
    yield put(loadQuestionsSuccess(response.data));
  } catch (err) {
  
    console.log(err)
    yield put(loadQuestionsFailure());
  }
}
