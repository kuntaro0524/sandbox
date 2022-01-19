import React, { memo, VFC } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useKuntaro } from "./useKuntaro";
import { QuizProvider } from "./providers/QuizProvider";
import { useQuiz } from "./useQuiz";

const PPPP = memo(() => {
  const { quizList, getQuiz } = useQuiz();
  getQuiz();
  console.log(quizList);

  return (
    <>
      <p>Continue?</p>
    </>
  );
});

function App() {
  return (
    <div className="App">
      <QuizProvider>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <PPPP />
        </header>
      </QuizProvider>
    </div>
  );
}

export default App;
