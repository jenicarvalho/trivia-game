import React from 'react';
import Headline from '../../components/Headline'
import { Container, Explanation, CTA } from './home.styles'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Container>
      <Headline>
        Welcome to the Trivia Challenge!
      </Headline>
      <Explanation>
        You will be presented with 10 <strong>True</strong> or <strong>False</strong> questions.
      </Explanation>
      <CTA>
        <p>Can you score 100%?</p>
        <Link to="/quiz">
          Begin
        </Link>
      </CTA>
    </Container>  
  );
}

export default Home;