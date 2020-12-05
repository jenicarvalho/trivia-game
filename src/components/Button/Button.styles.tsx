import styled from 'styled-components'
import { Link } from 'react-router-dom'



const ButtonLink = styled(Link)`
  text-decoration: none;
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
const ButtonStyled = styled.button`
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

export {
  ButtonStyled,
  ButtonLink
}