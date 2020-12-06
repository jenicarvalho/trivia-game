/**
 * Action Types
 */
export enum AnswersTypes {
  SET_ANSWERS = '@answers/SET_ANSWERS',
  GET_ANSWERS = '@answers/GET_ANSWERS'
}

/**
 * Data Types
 */
export interface Answers {
  question: string,
  correct: boolean
}

export interface AnswerResponse {
  AnswersResult: Array<Answers>
}

/**
 * State Type
 */
export interface AnswerState {
  readonly data: AnswerResponse
  readonly loadingAnswers: boolean
}
