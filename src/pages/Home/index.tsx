import { Container, Play } from "./styles";
import useSound from 'use-sound';
import playSound from '../../assets/audio/play.wav';
import { Title } from "../../components/Title";
import { Subtitle } from "../../components/Subtitle";

const Home = () => {
  const [play] = useSound(playSound);

  return (
    <Container>
      <Title>Trivia Game</Title>
      <Subtitle>Think you're a trivia master? Can you score <span>100%</span> and prove it? Test your knowledge now! 🧠 🔥</Subtitle>

      <Play onClick={play}>PLAY</Play>
    </Container>
  );
}

export default Home;