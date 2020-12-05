import React from 'react';
import { H1 } from './Headline.styles'

interface Props {
  children: string
}

const Headline = (props: Props) => {
return <H1>{props.children}</H1>;
}

export default Headline;