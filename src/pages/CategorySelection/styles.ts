import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  text-align: center;
`;

export const CategoryContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin: 2rem auto;
  width: 600px;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;

  @media(max-width: 768px) {
    width: 350px;
  }
`;

export const CategoryCard = styled.div<{ image?: string }>`
  flex-shrink: 0;
  scroll-snap-align: center;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.3s;
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  background-color: var(--purple);

  span {
    padding: 10px;
    color: var(--black);
    align-self: center;
    font-weight: 800;
    text-transform: uppercase;
  }

  &:hover {
    background-color: var(--green);
  }
`;