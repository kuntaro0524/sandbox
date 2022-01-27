import { useState, VFC } from "react";
import { QuizType } from "./type/QuitType";
import { useQuiz } from "./useQuiz";

type Props = { quizInfo: QuizType[]; quizIndex: number };

export const QuizDisp: VFC = () => {
  const { quizInfo, quizStatus } = useQuiz();

  return (
    <>
      <div> {quizInfo[quizStatus.quizIndex].question}</div>
      <div> {quizInfo[quizStatus.quizIndex].answer}</div>
    </>
  );
};
