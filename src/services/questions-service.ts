import http from "./api"

const QuestionsService = {
  getQuestions: () => http.get('?amount=10&difficulty=hard&type=boolean')
}

export default QuestionsService

