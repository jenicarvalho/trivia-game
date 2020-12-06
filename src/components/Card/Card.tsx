import React from 'react'
import { Container } from './Card.styles'

interface Props {
  children: string
}

const Card = (props: Props) => {
  return <Container>{props.children}</Container>
}

export default Card