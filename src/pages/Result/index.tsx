import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AllHtmlEntities } from 'html-entities'
import { useHistory } from "react-router-dom"

import Headline from '../../components/Headline'
import Button from '../../components/Button'
import { AnswersList, AnswerItem } from './result.styles'

import * as PlayAgainActions from '../../store/ducks/playAgain/actions'
import { Answers } from '../../store/ducks/answers/types'
import { ApplicationState } from '../../store'

const Result = () => {
  const history = useHistory()

  const dispatch = useDispatch();

  const { answers } = useSelector((state: ApplicationState) => ({
    answers: state.answers.data,
  }));

  const quantityCorrect = answers.AnswersResult.filter( answer => answer.correct === true).length

  const playAgain = () => {
    dispatch(PlayAgainActions.setReset())
    history.push(`/`);
  }

  return (
    <>
      <Headline>
        You scored {`${quantityCorrect}`}/10
      </Headline>
      <AnswersList>
        {answers && answers.AnswersResult.map(( answer: Answers ) => (
          <AnswerItem key={answer.question} color={answer.correct ? 'var(--green)' : 'var(--red)'}>
            <span>{answer.correct ? '+' : '-'}</span> 
            { AllHtmlEntities.decode(answer.question) }
          </AnswerItem>
        ))}
      </AnswersList>
      <Button onClick={() => playAgain()}>
        Play again?
      </Button>
    </>  
  )
}

export default Result