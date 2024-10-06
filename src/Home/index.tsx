import { Container, Play } from "./styles";
import useSound from 'use-sound';
import playSound from '../assets/audio/play.wav';

const Home = () => {
  const [play] = useSound(playSound);

  return (
    <Container>
      <h1>Trivia Game</h1>
      <p>Think you're a trivia master? Can you score <span>100%</span> and prove it? Test your knowledge now! 🧠 🔥</p>

      <Play onClick={play}>PLAY</Play>
    </Container>
  );
}

export default Home;