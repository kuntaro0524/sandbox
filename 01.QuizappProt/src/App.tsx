import React, { useContext, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  QuizContext,
  QuizProvider,
} from "./components/atom/provider/QuizProvider";
import { useQuiz } from "./components/atom/useQuiz";

const MyCompo = () => {
  const { quizInfo, setQuizInfo, getQuiz } = useQuiz();
  useEffect(() => {
    getQuiz();
  });
  console.log(quizInfo);
  return (
    <div>
      {quizInfo.map((component) => (
        <ol>
          <li> {component.question} </li>
          <li> {component.answer} </li>
        </ol>
      ))}
    </div>
  );
};

function App() {
t  return (
    <div className="App">
      <QuizProvider>
        <header className="App-header">
          <h1> Quiz application </h1>
          <MyCompo />
        </header>
      </QuizProvider>
    </div>
  );
}

export default App;
