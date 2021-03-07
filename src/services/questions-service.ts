import axios from "axios"

const QuestionsService = {
  getQuestions: () => axios.get('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
}

export default QuestionsService

