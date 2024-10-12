import styled from 'styled-components';

export const Subtitle = styled.h2`
  font-family: 'Courier New', Courier, monospace;
  color: var(--gray);
  text-align: center;
  margin-top: 2rem;
  font-size: 1.5rem;
  font-weight: 500;
  max-width: 750px;
  margin: 3rem auto;

  &::selection {
    background-color: var(--green);
    color: var(--black);
  }

  span {
    color: var(--green)
  }

  @media(max-width: 768px) {
    margin: 2rem auto;
  }
`;
