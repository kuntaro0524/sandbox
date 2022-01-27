import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
  VFC,
} from "react";

// 本当はContextでもちゃんと型指定をしていかなければいけない
export type QuizIndexContextType = {
  quizIndex: number;
  setQuizIndex: Dispatch<SetStateAction<number>>;
};

export const QuizIndexContext = createContext<QuizIndexContextType>(
  {} as QuizIndexContextType
);

export const QuizIndexProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [quizIndex, setQuizIndex] = useState<number>(0);

  return (
    <QuizIndexContext.Provider value={{ quizIndex, setQuizIndex }}>
      {children}
    </QuizIndexContext.Provider>
  );
};
