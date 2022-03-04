import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Skeleton,
} from "@chakra-ui/react";
import { ChangeEvent, useState, VFC } from "react";
import { QuizType } from "./type/QuitType";
import { useQuiz } from "./useQuiz";

type Props = { quizInfo: QuizType[]; quizIndex: number };

export const QuizDisp: VFC = () => {
  const { quizInfo, quizStatus, setQuizStatus } = useQuiz();

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

    // #quizStatus.isAnswered = true;
    setQuizStatus({ ...quizStatus, isAnswered: true });

    if (inputAnswer === correct_answer) {
      console.log("CORRECT!");
      setQuizStatus({ ...quizStatus, isCorrect: true });
    } else {
      console.log("Wrong!");
      setQuizStatus({ ...quizStatus, isCorrect: false });
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
        {quizStatus.isAnswered ? (
          <Box m={15} bg="tomato" p={4} w={500} color="white">
            {quizInfo[quizStatus.quizIndex].answer}
          </Box>
        ) : (
          <Box m={15} bg="tomato" p={4} w={500} color="white" />
        )}
        <Flex align="center" justify="center">
          Flex Container
        </Flex>
      </FormControl>
    </>
  );
};
