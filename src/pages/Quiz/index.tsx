import { useLocation, useNavigate } from "react-router-dom";
import { Subtitle } from "../../components/Subtitle";
import { Container, Buttons, Button, Breadcrumb } from "./styles";
import { useEffect, useState, useRef } from "react";
import useSound from 'use-sound';
import wrongSound from '../../assets/audio/wrong.wav';
import crowdYeah from '../../assets/audio/correct/crowd-yeah.wav';
import crowdYeah2 from '../../assets/audio/correct/crowd2-yeah.wav';
import girlsYeah from '../../assets/audio/correct/girls-yeah.wav';
import kidsYeah from '../../assets/audio/correct/kids-yeah.wav';
import wooYeah from '../../assets/audio/correct/woo-yeah.wav';

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

  const [playWrong] = useSound(wrongSound);
  const [playCrowdYeah] = useSound(crowdYeah);
  const [playCrowdYeah2] = useSound(crowdYeah2);
  const [playGirlsYeah] = useSound(girlsYeah);
  const [playKidsYeah] = useSound(kidsYeah);
  const [playWooYeah] = useSound(wooYeah);
  const sounds = [playCrowdYeah, playCrowdYeah2, playGirlsYeah, playKidsYeah, playWooYeah];

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setIsLoading] = useState(true);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [isAnswered, setIsAnswered] = useState(false);
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

  const isAnswerCorrect = (answer: string) => {
    return questions[currentQuestionIndex].correct_answer.toLowerCase() === answer.toLowerCase();
  }

  const handleAnswer = (answer: string) => {
    if (isAnswered) return;

    setIsAnswered(true); 
    setUserAnswers((prevAnswers) => [...prevAnswers, answer]);

    if (isAnswerCorrect(answer)) {
      const randomPlay = sounds[Math.floor(Math.random() * sounds.length)];
      randomPlay();
    } else {
      playWrong();
    }
    setTimeout(() => {
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

      setIsAnswered(false);
    }, 2000);
  };

  if (loading) {
    return <Container><h1>Loading...</h1></Container>;
  }

  const renderButton = (value: string, color: string) => {
    const answerText = isAnswered 
      ? (isAnswerCorrect(value) ? '✔' : '✘') 
      : value;
  
    return (
      <Button
        color={color}
        onClick={() => handleAnswer(value)}
        disabled={isAnswered}
        isCorrect={isAnswered ? isAnswerCorrect(value) : ''}
      >
        {answerText}
      </Button>
    );
  };

  return (
    <Container>
      {questions?.length > 0 ? (
        <>
          <h1 dangerouslySetInnerHTML={{ __html: questions[currentQuestionIndex].category}}/>
          <Subtitle dangerouslySetInnerHTML={{ __html: questions[currentQuestionIndex].question }} />
          <Buttons>
            {renderButton('True', 'var(--greenMedium)')}
            {renderButton('False', 'var(--red)')}
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
