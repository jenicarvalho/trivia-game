import { useLocation, useNavigate } from "react-router-dom";
import { Container, Results } from './styles';
import { Play } from "../Home/styles";
import useSound from 'use-sound';
import playSound from '../../assets/audio/play.wav';
import incorrectSound from '../../assets/audio/incorrect.wav';
import he from 'he';
import { Subtitle } from "../../components/Subtitle";

const ResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [play] = useSound(playSound);
  const [incorrect] = useSound(incorrectSound);
  const { results } = location.state || {};

  const totalCorrectAnswers = results ? results.filter((result: any) => result.isCorrect).length : 0;

  const playAndGo = () => {
    play();
    setTimeout(() => {
      navigate('/choose-a-category');
    }, 1000);
  }

  totalCorrectAnswers !== 10 && incorrect();

  return (
    <Container>
      <h1>Quiz Results</h1>
      {results ? (
        <>
          <Subtitle>You didn't make 100%!</Subtitle>
          <Results>
            {results.map((result: any, index: number) => (
              <li key={index} className={result.isCorrect ? 'correct' : 'incorrect'}>
                <span>{result.isCorrect ? '✅' : '❌'}</span>
                {he.decode(result.question)}
              </li>
            ))}
          </Results>
        </>
      ) : (
        <p>No results found.</p>
      )}
      <Play onClick={playAndGo}>Again</Play>
    </Container>
  );
};

export default ResultsPage;
