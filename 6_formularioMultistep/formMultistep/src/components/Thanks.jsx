import "./Thanks.css";
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

const Thanks = () => {
  return (
    <div className="thanks-container">
      <h2>Falta pouco...</h2>
      <p>
        Sua opinião é muito importante, em breve você receberá um cupom de 10%
        de desconto na sua próxima compra.
      </p>
      <p>Para concluir sua avaliação, clique no botão de Enviar abaixo.</p>
      <h3>Aqui está o resumo da sua avaliação:</h3>
      <p className="review-data">
        <span>Satisfatação com o produto: </span>
      </p>
      <p className="review-data">
        <span>Comentário: </span>
      </p>
    </div>
  );
};

export default Thanks;
