import "./GameOver.css";
import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import wellDone from "../img/welldone.svg";

const GameOver = () => {
  return (
    <div id="gameover">
      <h2>Game over</h2>
      <p>Pontuação: </p>
      <p>VOcê acertou y de z perguntas</p>
      <img src={wellDone} alt="Fim do quiz" />
      <button>Reiniciar</button>
    </div>
  );
};

export default GameOver;
