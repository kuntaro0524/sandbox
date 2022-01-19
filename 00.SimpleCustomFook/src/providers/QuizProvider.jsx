import { createContext, useState } from "react";

export const QuizContext = createContext();

export const QuizProvider = (props) => {
  const { children } = props;
  const [quizList, setQuizList] = useState([]);

  return (
    <QuizContext.Provider value={{ quizList, setQuizList }}>
      {children}
    </QuizContext.Provider>
  );
};
