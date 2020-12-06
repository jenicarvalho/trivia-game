import { Reducer } from "redux"
import { AnswerState, AnswersTypes } from "./types"

const INITIAL_STATE: AnswerState = {
  data: {
    AnswersResult: []
  },
  loadingAnswers: false
}

const reducer: Reducer<AnswerState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AnswersTypes.GET_ANSWERS:
      return { 
        ...state, 
        loadingAnswers: true 
      }
    case AnswersTypes.SET_ANSWERS:
      return {
        ...state,
        loadingAnswers: false,
        data: {
          AnswersResult: action.payload
        }
      }
    default:
      return state
  }
}

export default reducer
