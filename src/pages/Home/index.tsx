import { Container, Play } from "./styles";
import useSound from 'use-sound';
import playSound from '../../assets/audio/play.wav';
import { Title } from "../../components/Title";
import { Subtitle } from "../../components/Subtitle";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [play] = useSound(playSound);

  const playAndGo = () => {
    play();
    setTimeout(() => {
      navigate('/choose-a-category');
    }, 1000);
  }

  return (
    <Container>
      <Title>Trivia Game</Title>
      <Subtitle>Think you're a trivia master? Can you score <span>100%</span> and prove it? Test your knowledge now! 🧠 🔥</Subtitle>

      <Play onClick={playAndGo}>PLAY</Play>
    </Container>
  );
}

export default Home;