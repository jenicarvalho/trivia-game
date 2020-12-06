import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import Headline from '../../components/Headline'
import Button from '../../components/Button'
import Accordion from '../../components/Accordion'
import { Container } from './result.styles'

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

  console.log('answers', answers)
  
  return (
    <>
      <Headline>
        You scored 3/10
      </Headline>
      <Accordion />
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