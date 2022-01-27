import { VFC } from "react";
import { QuizType } from "./type/QuitType";

type Props = { quizInfo: QuizType[]; quizIndex: number };

export const QuizDisp: VFC<Props> = (props) => {
  const { quizInfo, quizIndex } = props;
  console.log("QUIZINFO=" + quizIndex);

  return (
    <>
      <div>{quizInfo[quizIndex].question}</div>
      <div>{quizInfo[quizIndex].answer}</div>
    </>
  );
};

// {quizInfo.map((component) => (
//   <ol>
//     <li> {component.question} </li>
//     <li> {component.answer} </li>
//   </ol>
// ))}
