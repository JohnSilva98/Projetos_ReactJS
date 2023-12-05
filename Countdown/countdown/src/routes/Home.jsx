import "./Home.css";
import { useContext, useState } from "react";
import { CountdownContext } from "../context/CountdownContext";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [color, setColor] = useState("");

  const { setEvent } = useContext(CountdownContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const eventObject = {
      title,
      date,
      image,
      color,
    };
    setEvent(eventObject);
    navigate("/countdown");
  };

  return (
    <div className="home">
      <h2>Monte sua contagem regressiva!</h2>
      <form className="countdown-form" onSubmit={handleSubmit}>
        <label>
          <span>Titúlo:</span>
          <input
            type="text"
            name="title"
            placeholder="Digite o título"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        x
        <label>
          <span>Data do evento:</span>
          <input
            type="date"
            name="date"
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Imagem:</span>
          <input
            type="text"
            name="image"
            placeholder="Insira a url da imagem"
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <label>
          <span>Cor do tema:</span>
          <input
            type="color"
            name="cor"
            onChange={(e) => setColor(e.target.value)}
            required
          />
        </label>
        <input type="submit" value="Enviar"></input>
      </form>
    </div>
  );
};

export default Home;
