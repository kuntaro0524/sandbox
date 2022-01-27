import React, { useContext, useEffect, VFC } from "react";
import logo from "./logo.svg";
import "./App.css";
import { QuizProvider } from "./components/atom/provider/QuizProvider";
import { QuizDisp } from "./components/atom/QuizDisp";
import { useQuiz } from "./components/atom/useQuiz";
import { QuizStatusProvider } from "./components/atom/provider/QuizStatusProvider";

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
      isAnswered: true,
      isCorrect: true,
    });
  };

  return (
    <div>
      <QuizDisp />
      <button onClick={onClicken}> push me </button>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <QuizProvider>
        <QuizStatusProvider>
          <header className="App-header">
            <h1> Quiz application </h1>
            <MyCompo />
          </header>
        </QuizStatusProvider>
      </QuizProvider>
    </div>
  );
}

export default App;
