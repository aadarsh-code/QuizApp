import React, { useState, useEffect } from "react";
import { CircularProgress } from "@material-ui/core";
import "./Quiz.css";
import Questions from "../../components/Question/Questions";
const Quiz = ({ name, questions, setquestion, score, setscore }) => {
  const [option, setoption] = useState();
  const [curques, setcurques] = useState(0);
  useEffect(() => {
    setoption(
      questions &&
        handleSuffle([
          questions[curques]?.correct_answer,
          ...questions[curques]?.incorrect_answers,
        ])
    );
  }, [questions, curques]);
  console.log(option);
  const handleSuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="quiz">
      <span className="user">Welcome {name}</span>

      {questions ? (
        <>
          <div className="status">
            <span>{questions[curques].category}</span>
            <span>Score:{score}</span>
          </div>
          <Questions
            option={option}
            questions={questions}
            curques={curques}
            setcurques={setcurques}
            correct={questions[curques].correct_answer}
            score={score}
            setscore={setscore}
            setquestion={setquestion}
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 200, textAlign: "center" }}
          color="inherit"
          size={150}
          thickness={2}
        />
      )}
    </div>
  );
};

export default Quiz;
