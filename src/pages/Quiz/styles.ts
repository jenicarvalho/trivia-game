import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  width: 100%;

  h1 {
    font-size: 2.5rem;
    text-transform: uppercase;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 5rem;
  margin-top: 1rem;
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