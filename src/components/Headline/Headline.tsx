import React from 'react'
import { H1 } from './Headline.styles'

interface Props {
  children: string,
  border?: boolean
}

const Headline = (props: Props) => {
return (
  <>
    <H1>{props.children}</H1>
    { props.border && <hr />}
  </>
)
}

export default Headline