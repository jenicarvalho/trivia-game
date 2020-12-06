import http from "./api"

export const getQuestions = () => http.get('?amount=10&difficulty=hard&type=boolean')

export default {
  getQuestions
}
