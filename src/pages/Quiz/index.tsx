import { Subtitle } from "../../components/Subtitle";
import { Container, Buttons, Button } from "./styles";

const Quiz = () => {
  return (
    <Container>
      <h1>History</h1>

      <Subtitle>The Kingdom of Prussia briefly held land in Estonia.</Subtitle>

      <Buttons>
        <Button color="var(--green)">True</Button>
        <Button color="var(--red)">False</Button>
      </Buttons>
    </Container>
  );
}

export default Quiz;