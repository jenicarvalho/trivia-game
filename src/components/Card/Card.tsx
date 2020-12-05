import React from 'react';

interface Props {
  children: string
}

const Card = (props: Props) => {
return <div>{props.children}</div>;
}

export default Card;