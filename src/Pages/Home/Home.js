import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import quiz from "../../Assets/quizimg.svg";
import "./Home.css";
import { Button, MenuItem, TextField } from "@material-ui/core";
import Categories from "../../Data/Categories";
import Errormsg from "../../components/ErrorMessage/Errormsg";
const Home = ({ name, setname, fetchQuestion }) => {
  const [level, setlevel] = useState("");
  const [cat, setcat] = useState("");
  const [error, seterror] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (!name || !level || !cat) {
      seterror(true);
      return;
    } else {
      seterror(false);
      fetchQuestion(cat, level);
      navigate("/quiz");
    }
  };
  console.log(cat);
  console.log(level);
  return (
    <div className="content">
      <div className="catg">
        <span style={{ fontSize: "30px" }}> Filter Your Quiz</span>
        <div className="catg_field">
          {error && <Errormsg>Please fill the all fields</Errormsg>}
          <TextField
            style={{ marginTop: 10 }}
            label="Enter Name"
            variant="outlined"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
          <TextField
            style={{ marginTop: 10 }}
            select
            label="choose category"
            variant="outlined"
            onChange={(e) => setcat(e.target.value)}
            value={cat}
          >
            {Categories.map((item) => {
              return (
                <MenuItem key={item.category} value={item.value}>
                  {item.category}
                </MenuItem>
              );
            })}
          </TextField>
          <TextField
            style={{ marginTop: 10 }}
            select
            label="choose Level"
            variant="outlined"
            value={level}
            onChange={(e) => {
              setlevel(e.target.value);
            }}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>
          <Button
            style={{ marginTop: "10px" }}
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
            Start Quiz
          </Button>
        </div>
      </div>
      <img src={quiz} alt="quiz" />
    </div>
  );
};

export default Home;
