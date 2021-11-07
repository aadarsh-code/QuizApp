import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";
function App() {
  const [name, setname] = useState("");
  const [questions, setquestion] = useState("");
  const [score, setscore] = useState(0);
  const fetchQuestion = async (cat = "", level = "") => {
    const res = await fetch(
      `https://opentdb.com/api.php?amount=10&category=${cat}&difficulty=${level}&type=multiple`
    );

    const data = await res.json();
    setquestion(data.results);
  };
  return (
    <Router>
      <div className="app" style={{ backgroundImage: "url(./blue.jpg)" }}>
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                name={name}
                setname={setname}
                fetchQuestion={fetchQuestion}
              />
            }
          />

          <Route
            path="/quiz"
            element={
              <Quiz
                name={name}
                score={score}
                setscore={setscore}
                questions={questions}
                setquestion={setquestion}
              />
            }
          />

          <Route
            path="/result"
            element={<Result score={score} name={name} />}
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
