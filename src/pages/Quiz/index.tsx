import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
import { ApplicationState } from '../../store'

const Quiz = () => {

  const dispatch = useDispatch();

  const { questions, loadingQuestions } = useSelector((state: ApplicationState) => ({
    questions: state.questions,
    loadingQuestions: state.questions.loadingQuestions
  }));

  const history = useHistory()

  const [questionIndex, setQuestionIndex] = useState(0)
  const [answersArray, setAnswersArray] = useState([])

  const questionsLength = questions.data.results.length

  useEffect(() =>{
    dispatch(QuestionsActions.loadQuestionsRequest())
  }, [])

  const setAnswer = (answer: boolean) => {

    let { question, correct_answer } = questions.data.results[questionIndex]
    
    let correct = Boolean(JSON.parse(correct_answer.toLowerCase())) === answer ? true : false

    let pusherAnswer: any = answersArray
    let currentAnswer = { question, correct}
    pusherAnswer.push(currentAnswer)

    setAnswersArray(pusherAnswer)

    dispatch(AnswersActions.setAnswers(pusherAnswer))

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
        { questions.data.responseCode === 0 ?  <h1>Sorry, something went wrong!</h1> :
        <>
          <Headline border={true}>
            { AllHtmlEntities.decode(questions.data.results[questionIndex].category) }
          </Headline>
          <Card>
            { AllHtmlEntities.decode(questions.data.results[questionIndex].question) }
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

export default Quiz