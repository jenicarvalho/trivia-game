import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --black: #161616;
    --white: #ffffff;
    --green: #dcf348;
    --purple: #625df5;
    --red: #ff380b;
    --gray: #7f7f7f;
    --darkGray: #232323;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Manrope", sans-serif;
    font-weight: 200;
    background-color: var(--black);
    color: var(--white);
  }

`;

export const Main = styled.main`
  width: clamp(320px, 80%, 1170px);
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;