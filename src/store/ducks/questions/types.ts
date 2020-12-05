/**
 * Action Types
 */
export enum QuestionsTypes {
  GET_QUESTIONS_REQUEST = '@questions/GET_QUESTIONS_REQUEST',
  GET_QUESTIONS_SUCCESS = '@questions/GET_QUESTIONS_SUCCESS',
  GET_QUESTIONS_FAILURE = '@questions/GET_QUESTIONS_FAILURE',
}

/**
 * Data Types
 */
export interface Question {
  category: string,
  type: string,
  difficulty: string,
  question: string,
  correct_answer: string,
  incorrect_answers: Array<boolean>
}

export interface QuestionsResponse {
  responseCode: number,
  results: Array<Question>
}

/**
 * State Type
 */
export interface QuestionsState {
  readonly data: QuestionsResponse;
  readonly loadingQuestions: boolean;
}
