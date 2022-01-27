import React, { useContext, useEffect, VFC } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  QuizContext,
  QuizProvider,
} from "./components/atom/provider/QuizProvider";
import { QuizType } from "./components/atom/type/QuitType";
import { useQuiz } from "./components/atom/useQuiz";

type Props = { quizInfo: QuizType[] };

const QuizDisp: VFC<Props> = (props) => {
  const { quizInfo } = props;

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

const MyCompo = () => {
  const { quizInfo, setQuizInfo, getQuiz } = useQuiz();
  useEffect(() => {
    getQuiz();
  }, []);
  return (
    <div>
      <QuizDisp quizInfo={quizInfo} />
    </div>
  );
};

function App() {
  return (
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
