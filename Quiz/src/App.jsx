import Question from "./components/Question";
import Welcome from "./components/Welcome";
import { useContext, useEffect } from "react";
import { QuizContext } from "./context/quiz";

import "./App.css";
function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    // embaralhar as perguntas
    dispatch({ type: "REORDER_QUESTIONS" });
  }, []);

  return (
    <div className="app">
      <h1>Quiz de programação!</h1>
      {quizState.stage === "Start" && <Welcome />}
      {quizState.stage === "Playing" && <Question />}
    </div>
  );
}

export default App;
