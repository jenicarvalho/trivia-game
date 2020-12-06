import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { AllHtmlEntities } from 'html-entities'

import { useHistory } from "react-router-dom"

import Headline from '../../components/Headline'
import Card from '../../components/Card'
import Breadcrumb from '../../components/Breadcrumb'
import Loader from '../../components/Loader'
import Button from '../../components/Button'

import { Content, ButtonsGroup } from './quiz.styles'
import * as QuestionsActions from '../../store/ducks/questions/actions'
import * as AnswersActions from '../../store/ducks/answers/actions'
import { QuestionsResponse } from '../../store/ducks/questions/types'
import { AnswerResponse, Answers } from '../../store/ducks/answers/types'
import { ApplicationState } from '../../store'

interface StateProps {
  loadingQuestions: boolean,
  questions: QuestionsResponse,
  answers: AnswerResponse
}

interface DispatchProps {
  loadQuestionsRequest(): void,
  setAnswers(answer: Answers ): void
}

type Props = StateProps & DispatchProps


const Quiz = (props: Props) => {
  const history = useHistory()

  const { loadQuestionsRequest, setAnswers, questions, loadingQuestions, answers } = props

  const [questionIndex, setQuestionIndex] = useState(0)
  const [answersArray, setAnswersArray] = useState([])

  const questionsLength = questions.results.length

  useEffect(() =>{
    loadQuestionsRequest()
  }, [])

  const setAnswer = (answer: boolean) => {

    let pusherAnswer: any = answersArray
    let currentAnswer = { question: questionIndex, answer}
    pusherAnswer.push(currentAnswer)
    setAnswersArray(pusherAnswer)

    setAnswers(pusherAnswer)

    nextQuestion()
  }

  const nextQuestion = () => {
    if(questionIndex < questionsLength - 1) {
      setQuestionIndex(questionIndex + 1)
    } else {
      history.push(`/result`);
    }
  }

  return (
    <> 
      { loadingQuestions ? <Loader /> :
      
      <Content>
        { questions.responseCode === 0 ?  <h1>Sorry, something went wrong!</h1> :
        <>
          <Headline border={true}>
            { AllHtmlEntities.decode(questions.results[questionIndex].category) }
          </Headline>
          <Card>
            { AllHtmlEntities.decode(questions.results[questionIndex].question) }
          </Card>
          
          <ButtonsGroup>
            <Button answer={true} onClick={() => setAnswer(true)}>
              True
            </Button>
            <Button answer={false} onClick={() => setAnswer(false)}>
              False
            </Button>
          </ButtonsGroup>
          <Breadcrumb>{`${questionIndex + 1} / ${questionsLength}`}</Breadcrumb>
        </>
       }
      </Content>
      }
    </>  
  )
}

const mapStateToProps = (state: ApplicationState) => ({
  loadingQuestions: state.questions.loadingQuestions,
  questions: state.questions.data,
  answers: state.answers.data
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      ...QuestionsActions,
      ...AnswersActions
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)