import Question from "./components/Question";
import Welcome from "./components/Welcome";
import { useContext, useEffect } from "react";
import { QuizContext } from "./context/quiz";

import "./App.css";
import GameOver from "./components/GameOver";
import Category from "./components/Category";
function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="app">
      <h1>Quiz de programação!</h1>
      {quizState.stage === "Start" && <Welcome />}
      {quizState.stage === "Category" && <Category />}
      {quizState.stage === "Playing" && <Question />}
      {quizState.stage === "End" && <GameOver />}
    </div>
  );
}

export default App;
