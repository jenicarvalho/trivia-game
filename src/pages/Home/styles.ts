import styled from 'styled-components';
import bg from '../../assets/images/bg.png';

export const Container = styled.div`
  width: 100%;
  text-align: center;

  &:before {
    content: '';
    background-image: url(${bg});
    background-size: contain;
    width: 100%;
    position: absolute;
    height: 100%;
    opacity: 0.03;
    left: 0;
    top: 0;
    z-index: -1;
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
