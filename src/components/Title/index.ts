import styled from 'styled-components';

export const Title = styled.h1<{ size?: string }>`
  font-family: "Sixtyfour Convergence", sans-serif;
  text-transform: uppercase;
  text-align: center;
  font-size: ${({ size }) => size ? size : '5rem'};
  letter-spacing: 0.5rem;
  font-weight: 800;
  background-image: linear-gradient(
    0deg,
    hsl(68deg 88% 62%) 0%,
    hsl(68deg 67% 45%) 29%,
    hsl(69deg 89% 30%) 43%,
    hsl(70deg 89% 24%) 57%,
    hsl(77deg 100% 13%) 71%,
    hsl(0deg 0% 0%) 100%
  );
  background-clip: text;
  color: transparent;
  background-size: 200% 200%;
  animation: moveGradient 2s linear infinite;

  @keyframes moveGradient {
    0% {
      background-position: 0% 0%;
    }
    50% {
      background-position: 100% 100%;
    }
    100% {
      background-position: 200% 200%;
    }
  }

  @media(max-width: 768px) {
    ont-size: 3rem;
    p { font-size: 1.2rem; }
  }

  @media(max-width: 375px) {
    font-size: 2rem;
    p { font-size: 1rem; }
  }
`;
