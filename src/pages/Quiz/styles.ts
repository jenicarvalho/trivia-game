import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  width: 100%;

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

export const Button = styled.button<{ color?: string }>`
  border: 2px solid ${({ color }) => color};
  background-color: transparent;
  color: ${({ color }) => color};
  text-transform: uppercase;
  padding: 1.5rem 2.5rem;
  font-size: 1.1rem;
  cursor: pointer;
`;

export const Breadcrumb = styled.div`
  margin-top: 4rem;
  color: var(--gray);
  font-weight: bold;
`;