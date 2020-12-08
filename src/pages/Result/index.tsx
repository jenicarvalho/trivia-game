import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { AllHtmlEntities } from 'html-entities'
import { useHistory } from "react-router-dom"

import Headline from '../../components/Headline'
import Button from '../../components/Button'
import { AnswersList, AnswerItem } from './result.styles'

import * as AnswersActions from '../../store/ducks/answers/actions'
import * as PlayAgainActions from '../../store/ducks/playAgain/actions'
import { AnswerResponse, Answers } from '../../store/ducks/answers/types'
import { ApplicationState } from '../../store'

interface StateProps {
  loadingAnswers: boolean,
  answers: AnswerResponse
}

interface DispatchProps {
  getAnswers(answer: Answers ): void,
  setReset(reset: boolean): void
}

type Props = StateProps & DispatchProps

const Result = (props: Props) => {
  const history = useHistory()

  const { answers, setReset } = props

  const quantityCorrect = answers.AnswersResult.filter( answer => answer.correct === true).length

  const playAgain = () => {
    setReset(true)
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

const mapStateToProps = (state: ApplicationState) => ({
  loadingAnswers: state.answers.loadingAnswers,
  answers: state.answers.data
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      ...AnswersActions,
      ...PlayAgainActions
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Result)