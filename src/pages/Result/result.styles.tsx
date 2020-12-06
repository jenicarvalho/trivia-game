import styled from 'styled-components';

const AnswersList = styled.ul`
  list-style: none;
  padding: 0;

  span {
    font-size: 30px;
    margin-right: 15px;
    font-weight: bold
  }
`;

const AnswerItem = styled.li`
  display: flex;
  line-height: 30px;
  font-size: 15px;
  letter-spacing: 0.5px;
  border-bottom: 1px solid rgb(255 255 255 / 13%);
  color: ${props => props.color};
`;

export {
  AnswersList,
  AnswerItem
}
