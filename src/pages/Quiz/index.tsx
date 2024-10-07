import { useLocation, useNavigate } from "react-router-dom";
import { Subtitle } from "../../components/Subtitle";
import { Container, Buttons, Button, Breadcrumb } from "./styles";
import { useEffect, useState, useRef } from "react";
import useSound from 'use-sound';
import falseSound from '../../assets/audio/false.wav';
import trueSound from '../../assets/audio/true.wav';

interface Question {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

const Quiz = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { categoryID } = location.state || {};

  const [playFalse] = useSound(falseSound);
  const [playTrue] = useSound(trueSound);

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setIsLoading] = useState(true);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const hasFetched = useRef(false);

  useEffect(() => {
    if (categoryID === undefined) {
      navigate('/choose-a-category');
      return;
    }

    if (hasFetched.current) return;

    const fetchQuestions = async () => {
      setIsLoading(true);
      const baseUrl = 'https://opentdb.com/api.php?amount=10';
      const categoryParam = categoryID !== 0 ? `&category=${categoryID}` : '';
      const url = `${baseUrl}${categoryParam}&type=boolean`;

      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const data = await response.json();
        setQuestions(data.results);
        hasFetched.current = true;
      } catch (error) {
        console.error("Failed to fetch questions:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuestions();
  }, [categoryID, navigate]);

  const handleAnswer = (answer: string) => {
    if (answer === 'True') {
      playTrue();
    } else {
      playFalse();
    }
    setUserAnswers((prevAnswers) => [...prevAnswers, answer]);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      const results = questions.map((question, index) => ({
        question: question.question,
        correct_answer: question.correct_answer,
        user_answer: userAnswers[index] || answer,
        isCorrect: (userAnswers[index] || answer) === question.correct_answer,
      }));

      navigate('/results', { state: { results } });
    }
  };

  if (loading) {
    return <Container><h1>Loading...</h1></Container>;
  }

  return (
    <Container>
      {questions?.length > 0 ? (
        <>
          <h1>{questions[currentQuestionIndex].category}</h1>
          <Subtitle dangerouslySetInnerHTML={{ __html: questions[currentQuestionIndex].question }} />
          <Buttons>
            <Button color="var(--green)" onClick={() => handleAnswer('True')}>True</Button>
            <Button color="var(--red)" onClick={() => handleAnswer('False')}>False</Button>
          </Buttons>
          <Breadcrumb>Question {currentQuestionIndex + 1} of {questions.length}</Breadcrumb>
        </>
      ) : (
        <h1>No Questions Found</h1>
      )}
    </Container>
  );
}

export default Quiz;
