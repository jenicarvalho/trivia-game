import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  text-align: center;

  &:before {
    content: '';
    background-image: radial-gradient(circle at center center, #000000, #ffffff), repeating-radial-gradient(circle at center center, #000000, #000000, 12px, transparent 24px, transparent 12px);
    background-blend-mode: multiply;
    background-size: contain;
    width: 100%;
    position: absolute;
    height: 100%;
    opacity: 0.03;
    left: 0;
    top: 0;
    z-index: -1;
  }

  h1 {
    text-align: center;
    font-size: 2.5rem;
    text-transform: uppercase;
    text-decoration: wavy underline var(--green);
  }
`;

export const Results = styled.div`
  margin: 2rem auto;
  list-style: none;
  width: 100%;
  max-width: 600px;
  height: 400px;
  overflow-y: auto;

  li {
    text-align: left;
    font-weight: 400;
    font-size: 1rem;
    margin-bottom: .4rem;
    color: var(--gray);
    background-color: var(--darkGray);
    padding: 5px 20px;
    border-radius: 20px;
    display: flex;
    align-items: center;

    &.correct { color: var(--green); }
    &.incorrect { color: var(--red); }
    &::selection {
      background-color: var(--green);
      color: var(--black);
    }

    &:hover {
      background-color: var(--black);
    }

    span {
      margin-right: 20px;
    }
  }

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 1rem;
    color: var(--gray);

    th {
      text-align: left;
      padding: 10px 20px;
      border-bottom: 2px solid var(--darkGray);
    }

    tr {
      background-color: var(--darkGray);
      border-bottom: 1px solid var(--black);
    }

    td {
      text-align: left;
      padding: 10px 20px;
    }

    /* tr.correct { color: var(--green); }
    tr.incorrect { color: var(--red); } */
  }

  &::-webkit-scrollbar {
    width: 1em;
  }
  
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: var(--darkGray);
    border: 1px solid slategrey;
  }
`;