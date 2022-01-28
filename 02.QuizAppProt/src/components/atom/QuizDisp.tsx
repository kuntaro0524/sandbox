import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { ChangeEvent, useState, VFC } from "react";
import { QuizType } from "./type/QuitType";
import { useQuiz } from "./useQuiz";

type Props = { quizInfo: QuizType[]; quizIndex: number };

export const QuizDisp: VFC = () => {
  const { quizInfo, quizStatus } = useQuiz();

  const [inputAnswer, setInputAnswer] = useState("kara");

  const onChangeAnswer = (e: ChangeEvent<HTMLInputElement>) => {
    setInputAnswer(e.target.value);
  };

  const onClickShowAnswer = () => {
    console.log(inputAnswer);
    const correct_answer = quizInfo[quizStatus.quizIndex].answer;
    console.log(correct_answer);
    console.log("INPUT:" + inputAnswer);
    console.log("CORR:" + correct_answer);
    console.log(inputAnswer === correct_answer);

    if (inputAnswer === correct_answer) {
      console.log("CORRECT!");
    } else {
      console.log("Wrong!");
    }
  };

  return (
    <>
      <div> {quizInfo[quizStatus.quizIndex].question}</div>
      <FormControl>
        <FormLabel htmlFor="email">回答を入力</FormLabel>
        <Input id="user_answer" type="answer" onChange={onChangeAnswer} />
        <FormHelperText>わからなかったらどうしよう</FormHelperText>
        <Button colorScheme="teal" onClick={onClickShowAnswer}>
          答えを見る
        </Button>
      </FormControl>
    </>
  );
};
