import React, { useContext, useEffect, VFC } from "react";
import logo from "./logo.svg";
import "./App.css";
import { QuizProvider } from "./components/atom/provider/QuizProvider";
import { QuizDisp } from "./components/atom/QuizDisp";
import { useQuiz } from "./components/atom/useQuiz";
import { QuizIndexProvider } from "./components/atom/provider/QindexProvider";

const MyCompo = () => {
  const { quizInfo, setQuizInfo, getQuiz, quizIndex, setQuizIndex } = useQuiz();

  useEffect(() => {
    getQuiz();
    setQuizIndex(0);
  }, []);

  const onClicken = () => {
    setQuizIndex(quizIndex + 1);
  };

  console.log("KOKOKO=" + quizIndex);
  return (
    <div>
      <QuizDisp quizInfo={quizInfo} quizIndex={quizIndex} />
      <button onClick={onClicken}> push me </button>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <QuizProvider>
        <QuizIndexProvider>
          <header className="App-header">
            <h1> Quiz application </h1>
            <MyCompo />
          </header>
        </QuizIndexProvider>
      </QuizProvider>
    </div>
  );
}

export default App;
