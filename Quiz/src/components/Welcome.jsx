import quiz from "../img/quiz.svg";
import "./Welcome.css";
const Welcome = () => {
  return (
    <div id="welcome">
      <h2>Seja bem vindo</h2>
      <p>CLique no Botão abaixo para começar</p>
      <button>Iniciar</button>
      <img src={quiz} alt="Inicio do quiz" />
    </div>
  );
};

export default Welcome;
