import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
  VFC,
} from "react";

import { QuizType } from "../type/QuitType";

// 本当はContextでもちゃんと型指定をしていかなければいけない
export type QuizContextType = {
  quizInfo: QuizType[];
  setQuizInfo: Dispatch<SetStateAction<QuizType[]>>;
};

export const QuizContext = createContext<QuizContextType>(
  {} as QuizContextType
);

export const QuizProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [quizInfo, setQuizInfo] = useState<QuizType[]>([
    {
      _id: "q01",
      question: "Is this your pen?",
      answer: "Yes, it is.",
      page: 99,
      made_date: "2022/01/22",
      ntrial: 3,
      ncorr: 9,
      corr_ratio: 0.99,
    },
    {
      _id: "q02",
      question: "Is that your pen?",
      answer: "Yes, that is.",
      page: 99,
      made_date: "2022/01/22",
      ntrial: 3,
      ncorr: 9,
      corr_ratio: 0.99,
    },
  ]);

  return (
    <QuizContext.Provider value={{ quizInfo, setQuizInfo }}>
      {children}
    </QuizContext.Provider>
  );
};
