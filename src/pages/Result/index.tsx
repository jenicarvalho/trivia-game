import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { AllHtmlEntities } from 'html-entities'

import Headline from '../../components/Headline'
import Button from '../../components/Button'
import { AnswersList, AnswerItem } from './result.styles'

import * as AnswersActions from '../../store/ducks/answers/actions'
import { AnswerResponse, Answers } from '../../store/ducks/answers/types'
import { ApplicationState } from '../../store'

interface StateProps {
  loadingAnswers: boolean,
  answers: AnswerResponse
}

interface DispatchProps {
  getAnswers(answer: Answers ): void
}

type Props = StateProps & DispatchProps

const Result = (props: Props) => {

  const { answers } = props

  const quantityCorrect = answers.AnswersResult.filter( answer => answer.correct === true).length

  return (
    <>
      <Headline>
        You scored {`${quantityCorrect}`}/10
      </Headline>
      <AnswersList>
        {answers && answers.AnswersResult.map(( answer: Answers ) => (
          <AnswerItem color={answer.correct ? 'var(--green)' : 'var(--red)'}>
            <span>{answer.correct ? '+' : '-'}</span> 
            { AllHtmlEntities.decode(answer.question) }
          </AnswerItem>
        ))}
      </AnswersList>
      <Button onClick={() => {}}>
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
      ...AnswersActions
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Result)