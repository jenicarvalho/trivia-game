import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  text-align: center;


  h1 {
    text-align: center;
    font-size: 2.5rem;
    text-transform: uppercase;
    text-decoration: wavy underline var(--green);
  }
`;

export const Results = styled.ul`
  margin: 2rem auto;
  list-style: none;
  width: 100%;
  max-width: 600px;
  height: 450px;
  overflow-y: auto;

  li {
    text-align: left;
    font-weight: 400;
    font-size: 1rem;
    margin-bottom: .4rem;
    color: var(--gray);
    background-color: var(--darkGray);
    padding: 5px 20px;
    border-radius: 20px;
    display: flex;
    align-items: center;

    &.correct { color: var(--green); }
    &.incorrect { color: var(--red); }
    &::selection {
      background-color: var(--green);
      color: var(--black);
    }

    &:hover {
      background-color: var(--black);
    }

    span {
      margin-right: 20px;
    }
  }
`;