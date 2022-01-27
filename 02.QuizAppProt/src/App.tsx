import React, { useContext, useEffect, VFC } from "react";
import logo from "./logo.svg";
import "./App.css";
import { QuizProvider } from "./components/atom/provider/QuizProvider";
import { QuizDisp } from "./components/atom/QuizDisp";
import { useQuiz } from "./components/atom/useQuiz";
import { QuizIndexProvider } from "./components/atom/provider/QindexProvider";
import { QuizStatusProvider } from "./components/atom/provider/QuizStatusProvider";

const MyCompo = () => {
  const {
    quizInfo,
    setQuizInfo,
    getQuiz,
    quizIndex,
    setQuizIndex,
    quizStatus,
    setQuizStatus,
  } = useQuiz();

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
    setQuizIndex(quizIndex + 1);
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
        <QuizIndexProvider>
          <QuizStatusProvider>
            <header className="App-header">
              <h1> Quiz application </h1>
              <MyCompo />
            </header>
          </QuizStatusProvider>
        </QuizIndexProvider>
      </QuizProvider>
    </div>
  );
}

export default App;
