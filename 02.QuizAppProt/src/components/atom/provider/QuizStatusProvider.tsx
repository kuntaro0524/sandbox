import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
  VFC,
} from "react";

type QuizStatusType = {
  quizIndex: number;
  isAnswered: boolean;
  isCorrect: boolean;
};

// 本当はContextでもちゃんと型指定をしていかなければいけない
export type QuizStatusContextType = {
  quizStatus: QuizStatusType;
  setQuizStatus: Dispatch<SetStateAction<QuizStatusType>>;
};

export const QuizStatusContext = createContext<QuizStatusContextType>(
  {} as QuizStatusContextType
);

export const QuizStatusProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [quizStatus, setQuizStatus] = useState<QuizStatusType>({
    quizIndex: 0,
    isAnswered: false,
    isCorrect: false,
  });

  return (
    <QuizStatusContext.Provider value={{ quizStatus, setQuizStatus }}>
      {children}
    </QuizStatusContext.Provider>
  );
};
