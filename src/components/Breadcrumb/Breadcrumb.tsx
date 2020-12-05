import React from 'react';

interface Props {
  children: string
}

const Breadcrumb = (props: Props) => {
return <div>{props.children}</div>;
}

export default Breadcrumb;