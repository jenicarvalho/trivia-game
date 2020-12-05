import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --purple: #7042a9;
    --yellow: #ffdd01;
    --gray: #595958;
    --green: #00d400;
    --red: #ff5800;
    --redMedium: #ef0909;
    --redDardk: #b30000;
    --redDardker: #8c0202;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }
  body {
    font-family: 'Dosis', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #fff;
    background: var(--purple);
    background: -moz-linear-gradient(90deg, rgba(84,21,160,0.9) 29%, rgba(143,52,255,1) 71%, rgba(176,140,221,1) 100%);
    background: -webkit-linear-gradient(90deg, rgba(84,21,160,0.9) 29%, rgba(143,52,255,1) 71%, rgba(176,140,221,1) 100%);
    background: linear-gradient(90deg, rgba(84,21,160,0.9) 29%, rgba(143,52,255,1) 71%, rgba(176,140,221,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#5415a2",endColorstr="#b08cdd",GradientType=1);
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
    box-shadow: 0 6px 0 var(--redDardk);

    &:hover {
      background: var(--redDardk);
      box-shadow: 0 6px 0 var(--redDardker);
    }

    &:active {
      position: relative;
      top: 6px;
      box-shadow: 0 0px 0 var(--redDardk);
      background: var(--redDardk);
    }
`;

const Main = styled('main')`
  background: rgb(255 255 255 / 3%);
  margin: 10px auto;
  border-radius: 20px;
  border: 1px solid rgb(255 255 255 / 8%);
  box-shadow: 1px 1px 20px rgb(0 0 0 / 10%);
  display: flex; 
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 600px;
  height: 95vh;
  padding: 50px 20px;
`

export {
  GlobalStyle,
  Main
}