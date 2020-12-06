import styled, { css } from 'styled-components'

interface ButtonStyled {
  answer?: boolean;
}

const Container = styled.button<ButtonStyled>`
  border: none;
  padding: 10px 20px;
  font-size: 25px;
  border-radius: 100%;
  font-family: 'Nerko One';
  color: #fff;
  font-weight: 100;
  margin-top: 20px;
  cursor: pointer;
  outline: none;

  ${props => props.answer && css`
    background: var(--green);
    box-shadow: 0 6px 0 var(--greenDark);

    &:hover,
    &:active  {
      background: var(--greenMedium);
      box-shadow: 0 6px 0 var(--greenDarker);
    }
  `}

  ${props => !props.answer && css`
    background: var(--red);
    box-shadow: 0 6px 0 var(--redDark);

    &:hover,
    &:active  {
      background: var(--redMedium);
      box-shadow: 0 6px 0 var(--redDarker);
    }
  `}

  &:active {
    position: relative;
    top: 6px;
    box-shadow: 0 0px 0 transparent;
  }

`;

export {
  Container
}