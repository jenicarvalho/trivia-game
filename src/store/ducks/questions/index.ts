import { Reducer } from "redux"
import { QuestionsState, QuestionsTypes } from "./types"

const INITIAL_STATE: QuestionsState = {
  data: {
    responseCode: 0,
    results: []
  },
  loadingQuestions: false
}

const reducer: Reducer<QuestionsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case QuestionsTypes.GET_QUESTIONS_REQUEST:
      return { ...state, loadingQuestions: true }
    case QuestionsTypes.GET_QUESTIONS_SUCCESS:
      return {
        ...state,
        loadingQuestions: false,
        data: action.payload.data
      }
    case QuestionsTypes.GET_QUESTIONS_FAILURE:
      return { ...state, loadingQuestions: false }
    default:
      return state
  }
}

export default reducer
