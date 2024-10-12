import { useLocation, useNavigate } from "react-router-dom";
import { Container, Results } from './styles';
import { Play } from "../Home/styles";
import useSound from 'use-sound';
import playSound from '../../assets/audio/play.wav';
import incorrectSound from '../../assets/audio/result/incorrect.wav';
import perfectSound from '../../assets/audio/result/perfect.wav';
import { Subtitle } from "../../components/Subtitle";
import { useEffect } from "react";

const ResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [play] = useSound(playSound);
  const [incorrectPlay] = useSound(incorrectSound);
  const [perfectPlay] = useSound(perfectSound);
  const { results } = location.state || {};

  const totalCorrectAnswers = results ? results.filter((result: any) => result.isCorrect).length : 0;

  const playAndGo = () => {
    play();
    setTimeout(() => {
      navigate('/choose-a-category');
    }, 1000);
  }

  useEffect(() => {
    if (totalCorrectAnswers === 10) {
      perfectPlay();
    } else {
      incorrectPlay();
    }
  }
  , [perfectPlay, incorrectPlay, totalCorrectAnswers]);

  return (
    <Container>
      <h1>Quiz Results</h1>
      {results ? (
        <>
          <Subtitle>
            {totalCorrectAnswers === 10 ? 'You made 100%! 🎉' : 'You didn\'t make 100%! 😔'}
          </Subtitle>
          <Results>
            <table>
              <tr>
                <th>#</th>
                <th>Question</th>
                <th>Correct Answer</th>
                <th>Your answer</th>
              </tr>
            {results.map((result: any, index: number) => (
              <tr key={index} className={result.isCorrect ? 'correct' : 'incorrect'}>
                <td>{result.isCorrect ? '✅' : '❌'}</td>
                <td dangerouslySetInnerHTML={{ __html: result.question}}></td>
                <td>{result.correct_answer}</td>
                <td>{result.user_answer}</td>
              </tr>
            ))}
            </table>
          </Results>
        </>
      ) : (
        <p>No results found.</p>
      )}
      <Play onClick={playAndGo}>AGAIN</Play>
    </Container>
  );
};

export default ResultsPage;
