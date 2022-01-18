import React, { memo, VFC } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useKuntaro } from "./useKuntaro";
import { QuizInfo } from "./QuizInfo";

type Props = {
  quiz: QuizInfo;
};

const PPP: VFC<Props> = memo((props) => {
  const { quiz } = props;
  console.log("in PPPP");
  return (
    <>
      <h1> title </h1>
      <p> {quiz} </p>
    </>
  );
});

function App() {
  // const { fetchQuizes, useUnko, unkos } = useKuntaro();
  const { isRead, isReadDB, useUnko, fetchQuizes, fetchCurrQuiz } =
    useKuntaro();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>UNKO MORETA</p>
        <button onClick={fetchQuizes()}> UNKO </button>

        {/* <p> {fetchCurrQuiz()} </p> */}
        {isRead ? <PPP quiz={fetchCurrQuiz()} /> : <p>呼んでないで</p>}
      </header>
    </div>
  );
}

export default App;
