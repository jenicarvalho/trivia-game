import React from 'react';
import Headline from '../../components/Headline'
import Card from '../../components/Card'
import Breadcrumb from '../../components/Breadcrumb'

const Quiz = () => {
  return (
    <>
      <Headline>
        Entertainment: Video Games
      </Headline>
      <Card>
        You will be presented with 10 True or False questions.
      </Card>
      <Breadcrumb>01/10</Breadcrumb>
      <button>
        True
      </button>
      <button>
        False
      </button>
    </>  
  );
}

export default Quiz;