import axios from "axios";
import { useContext, useState } from "react";

import { QuizInfo } from "./QuizInfo";
import { QuizContext } from "./providers/QuizProvider";

export const useKuntaro = () => {
  let curr_quiz_index = 0;
  const [isRead, setIsRead] = useState(false);
  //   const [quizInfo, setQuizInfo] = useState<QuizInfo[]>([]);
  const { quizInfo, setQuizInfo } = useContext(QuizContext);
  const useUnko = () => {
    console.log("Print useUnko was done");
  };

  const nextQuiz = () => {
    curr_quiz_index += 1;
  };

  const prevQuiz = () => {
    curr_quiz_index -= 1;
  };

  const isReadDB = () => {
    return isRead;
  };

  //   databaseのAPIからデータを取得してくる
  const fetchQuizes = () => {
    axios
      .get<QuizInfo[]>("http://localhost:9201/quiz", {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })

      .then((res) => {
        setQuizInfo(res.data);
        setIsRead(true);
        console.log(res.data);
      })
      .catch(function (error) {
        console.log("ERROR?");
        console.log(error.config);
        for (let key of Object.keys(error)) {
          console.log(key);
          console.log(error[key]);
        }
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  };

  const fetchCurrQuiz = () => {
    const currQ = quizInfo[curr_quiz_index];
    console.log(currQ);

    return currQ;
  };

  return { isRead, isReadDB, useUnko, fetchQuizes, fetchCurrQuiz };
};
