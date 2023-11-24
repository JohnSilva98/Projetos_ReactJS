import quiz from "../img/quiz.svg";
import "./Welcome.css";
import { useContext } from "react";
import { QuizContext } from "../context/quiz";

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  console.log(quizState);

  return (
    <div id="welcome">
      <h2>Seja bem vindo</h2>
      <p>CLique no Botão abaixo para começar</p>
      <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>
        Iniciar
      </button>
      <img src={quiz} alt="Inicio do quiz" />
    </div>
  );
};

export default Welcome;
