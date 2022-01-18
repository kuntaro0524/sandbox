import axios from "axios";
import { useState } from "react";

import { QuizInfo } from "./QuizInfo";

export const useKuntaro = () => {
  let curr_quiz_index = 0;
  const [isRead, setIsRead] = useState(false);
  const [quizList, setQuizList] = useState<QuizInfo[]>([]);
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
      .get<Array<QuizInfo>>("http://localhost:9201/quiz", {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })

      .then((res) => {
        // console.log(res.data);
        setQuizList(res.data);
        setIsRead(true);
        console.log(quizList);
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
    const currQ = quizList[curr_quiz_index];
    console.log(currQ);

    return currQ;
  };

  return { isRead, isReadDB, useUnko, fetchQuizes, fetchCurrQuiz };
};
