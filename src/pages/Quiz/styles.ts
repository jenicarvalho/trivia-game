import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  width: 100%;

  &:before {
    content: '';
    background-image:  repeating-radial-gradient( circle at 0 0, transparent 0, #ffffff 12px ), repeating-linear-gradient( #00000055, #000000 );
    background-size: contain;
    width: 100%;
    position: absolute;
    height: 100%;
    opacity: 0.03;
    left: 0;
    top: 0;
    z-index: -1;
  }

  h1 {
    font-size: 2.5rem;
    text-transform: uppercase;
    text-decoration: wavy underline var(--green);
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 5rem;
  margin-top: 1rem;

  @media (max-width: 375px) {
    gap: 2rem
  }
`;

export const Button = styled.button<{ color?: string, isCorrect?: boolean | string }>`
  border: 2px solid ${({ color }) => color};
  background-color: transparent;
  color: ${({ color }) => color};
  text-transform: uppercase;
  padding: 1.5rem 2.5rem;
  font-size: 1.1rem;
  cursor: pointer;
  width: 130px;

  ${({ isCorrect }) => isCorrect === true && `
    background-color: var(--greenMedium);
    border-color: var(--greenMedium);
    color: var(--white);
    &::before {
      margin-right: 0.5rem;
    }`
  }

  ${({ isCorrect }) => isCorrect === false && `
    background-color: var(--red);
    border-color: var(--red);
    color: var(--white);
    &::before {
      margin-right: 0.5rem;
    } 
  `}
`;

export const Breadcrumb = styled.div`
  margin-top: 4rem;
  color: var(--gray);
  font-weight: bold;
`;