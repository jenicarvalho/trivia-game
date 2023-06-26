import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --purple: #695bdf;
    --yellow: #ffdd01;
    --gray: #595958;
    --black: #444;
    --green: #00d400;
    --greenMedium: #00a000;
    --greenDark: #077d07;
    --greenDarker: #016701;
    --red: #ff5800;
    --redMedium: #ef0909;
    --redDark: #b30000;
    --redDarker: #8c0202;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }
  body {
    font-family: 'Dosis', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: var(--black);
    background: var(--purple);
  }

  button, a {
    text-decoration: none;
    border: none;
    padding: 10px 20px;
    font-size: 25px;
    border-radius: 100%;
    font-family: 'Nerko One';
    background: var(--redMedium);
    color: #fff;
    font-weight: 100;
    margin-top: 20px;
    cursor: pointer;
    outline: none;
    box-shadow: 0 6px 0 var(--redDark);

    &:hover {
      background: var(--redDark);
      box-shadow: 0 6px 0 var(--redDarker);
    }

    &:active {
      position: relative;
      top: 6px;
      box-shadow: 0 0px 0 var(--redDark);
      background: var(--redDark);
    }
  }

  hr {    
    width: 200px;
    opacity: 0.2;
  }
`;

const Main = styled('main')`
  background: #fff;
  margin: 10px auto;
  border-radius: 20px;
  border: 4px solid rgb(105 92 223 / 35%);
  display: flex; 
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 600px;
  height: 95vh;
  padding: 50px;
`

export {
  GlobalStyle,
  Main
}