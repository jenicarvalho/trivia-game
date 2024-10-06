import styled from 'styled-components';

export const Subtitle = styled.h1`
  font-family: 'Courier New', Courier, monospace;
  color: #7f7f7f;
  text-align: center;
  margin-top: 2rem;
  font-size: 1.5rem;
  font-weight: 500;
  max-width: 750px;
  margin: 4rem auto;

  &::selection {
    background-color: var(--green);
    color: var(--black);
  }

  span {
    color: var(--green)
  }
`;
