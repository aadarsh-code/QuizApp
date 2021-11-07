import { Button } from "@material-ui/core";
import React, { useState } from "react";
import Errormsg from "../ErrorMessage/Errormsg";
import { useNavigate } from "react-router-dom";
import "./Question.css";
const Questions = ({
  questions,

  score,
  setscore,
  curques,
  setcurques,
  option,
  correct,
  setquestion,
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);
  const handleSelect = (item) => {
    if (selected === item && selected === correct) return "select";
    else if (selected === item && selected !== correct) return "wrong";
    else if (item === correct) return "select";
  };
  const handleCheck = (item) => {
    setSelected(item);
    if (item === correct) setscore(score + 1);
    setError(false);
  };
  const handleNext = () => {
    if (curques > 8) {
      navigate("/result");
    } else if (selected) {
      setcurques(curques + 1);
      setSelected();
    } else setError("Please select  an option first");
  };
  const handleQuit = () => {
    setcurques(0);
    setquestion();
  };
  //   console.log(curques);
  const navigate = useNavigate();
  return (
    <div className="question">
      <h1>Question {curques + 1}:</h1>
      <div className="que-box">
        <h2>{questions[curques].question}</h2>

        <div className="option">
          {error && <Errormsg>{error}</Errormsg>}
          {option &&
            option.map((item) => (
              <button
                className={`singleoption ${selected && handleSelect(item)}`}
                key={item}
                onClick={() => handleCheck(item)}
                disabled={selected}
              >
                {item}
              </button>
            ))}
        </div>
        <div className="controls">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ width: 185 }}
            onClick={handleNext}
          >
            Next Question
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185 }}
            href="/"
            onClick={() => handleQuit()}
          >
            Quit
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Questions;
