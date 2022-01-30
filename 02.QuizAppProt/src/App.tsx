import React, { useContext, useEffect, VFC } from "react";
import logo from "./logo.svg";
import "./App.css";
import { QuizProvider } from "./components/atom/provider/QuizProvider";
import { QuizDisp } from "./components/atom/QuizDisp";
import { useQuiz } from "./components/atom/useQuiz";
import { QuizStatusProvider } from "./components/atom/provider/QuizStatusProvider";
import { Button, ChakraProvider } from "@chakra-ui/react";

const MyCompo = () => {
  const { quizInfo, setQuizInfo, getQuiz, quizStatus, setQuizStatus } =
    useQuiz();

  // 初期設定
  let initial_status = {
    quizIndex: 0,
    isAnswered: false,
    isCorrect: false,
  };

  useEffect(() => {
    getQuiz();
    setQuizStatus(initial_status);
  }, []);

  const onClicken = () => {
    const new_index = quizStatus.quizIndex + 1;
    setQuizStatus({
      quizIndex: new_index,
      isAnswered: false,
      isCorrect: true,
    });
  };

  return (
    <div>
      <QuizDisp />
      <Button colorScheme="blue" onClick={onClicken}>
        PUSHPUSH
      </Button>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <QuizProvider>
          <QuizStatusProvider>
            <header className="App-header">
              <h1> Quiz application </h1>
              <MyCompo />
            </header>
          </QuizStatusProvider>
        </QuizProvider>
      </ChakraProvider>
    </div>
  );
}

export default App;
