import { useState } from 'react';
import { Title } from '../../components/Title';
import { CategoryCard, CategoryContainer, Container } from './styles';
import { Subtitle } from '../../components/Subtitle';
import selectSound from '../../assets/audio/select.wav';
import useSound from 'use-sound';
import { useNavigate } from 'react-router-dom';

const categories = [
  { id: 0, label: 'Any Category'},
  { id: 9, label: 'General Knowledge' },
  { id: 10, label: 'Entertainment: Books' },
  { id: 11, label: 'Entertainment: Film' },
  { id: 12, label: 'Entertainment: Music' },
  { id: 13, label: 'Entertainment: Musicals & Theatres' },
  { id: 14, label: 'Entertainment: Television' },
  { id: 15, label: 'Entertainment: Video Games' },
  { id: 16, label: 'Entertainment: Board Games' },
  { id: 17, label: 'Science & Nature' },
  { id: 18, label: 'Science: Computers' },
  { id: 19, label: 'Science: Mathematics' },
  { id: 20, label: 'Mythology' },
  { id: 21, label: 'Sports' },
  { id: 22, label: 'Geography' },
  { id: 23, label: 'History' },
  { id: 24, label: 'Politics' },
  { id: 25, label: 'Art' },
  { id: 26, label: 'Celebrities' },
  { id: 27, label: 'Animals' },
  { id: 28, label: 'Vehicles' },
  { id: 29, label: 'Entertainment: Comics' },
  { id: 30, label: 'Science: Gadgets' },
  { id: 31, label: 'Entertainment: Japanese Anime & Manga' },
  { id: 32, label: 'Entertainment: Cartoon & Animations' }
];

const CategorySelection = () => {
  const navigate = useNavigate();
  const [play] = useSound(selectSound);
  const [categoryID, setCategoryID] = useState(0);

  const selectAndGo = (id: number) => {
    setCategoryID(id);
    play();
    setTimeout(() => {
      navigate('/');
    }, 1000);
  }

  return (
    <Container>
      <Title size='3rem'>Choose a Category</Title>
      <Subtitle>Select a category you are familiar with to answer 10 true or false questions.</Subtitle>

      <CategoryContainer>
        {categories.map(({ id, label }) => (
          <CategoryCard key={id} onClick={() => selectAndGo(id)}>
            <span>{label}</span>
          </CategoryCard>
        ))}
      </CategoryContainer>
    </Container>
  );
}

export default CategorySelection;
