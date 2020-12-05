import React from 'react';
import Headline from '../../components/Headline'
import Button from '../../components/Button'
import Accordion from '../../components/Accordion'
import { Container } from './result.styles'

const Home = () => {
  return (
    <>
      <Headline>
        You scored 3/10
      </Headline>
      <Accordion />
      <Button>
        Play again?
      </Button>
    </>  
  );
}

export default Home;