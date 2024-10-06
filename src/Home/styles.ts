import styled from 'styled-components';
import bg from '../assets/images/bg.png';

export const Container = styled.div`
  &:before {
    content: '';
    background-image: url(${bg});
    background-size: contain;
    width: 100%;
    position: absolute;
    height: 100%;
    opacity: 0.05;
    left: 0;
    top: 0;
    z-index: -1;
  }
  text-align: center;
  

  h1 {
    font-family: "Sixtyfour Convergence", sans-serif;
    text-transform: uppercase;
    text-align: center;
    font-size: 5rem;
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
  }

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

  p {
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
  }

  @media(max-width: 768px) {
    h1 {
      font-size: 3rem;
    }

    p {
      font-size: 1.2rem;
    }
  }
`;

export const Play = styled.button`
    color: var(--white);
    font-size: 1rem;
    font-weight: 700;
    text-shadow: 1px 1px 4px rgba(0,0,0, 0.9);
    width: 100px;
    height: 100px;
    border-radius: 100%;
    border: 8px solid #ff002b;
    background-color: #f4032a;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    transition: box-shadow 0.1s ease, background-color 0.1s ease;
    box-shadow: 0px 6px 4px -1px rgba(0, 0, 0, 0.3) inset, 0px -10px 4px rgba(0, 0, 0, 0.3) inset;
    
    &:active {
      background-color: #d60123;
      box-shadow: 0px 10px 4px rgba(0, 0, 0, 0.5) inset, 0px -6px 4px -1px rgba(0, 0, 0, 0.5) inset;
    }
`;
