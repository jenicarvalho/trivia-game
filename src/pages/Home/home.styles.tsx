import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-evenly;
  text-align: center;
`;

const Explanation = styled.div`
  font-size: 30px;
  margin: 20px auto;
  color: rgba(255,255,255,0.5);
  max-width: 350px;

  strong { text-transform: uppercase }

  strong:first-child {
    color: var(--green);
  }
  strong:last-child {
    color: var(--red);
  }
`;

const CTA = styled.div`
  font-size: 20px;
  margin: 0;
  display: flex;
  align-items: baseline;
  justify-content: center;

  p {
    margin: 20px;
  }
`;

export {
  Explanation,
  Container,
  CTA
}
