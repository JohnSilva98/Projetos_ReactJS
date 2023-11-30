import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h2>Monte sua contagem regressiva!</h2>
      <form className="countdown-form">
        <label>
          <span>Titúlo:</span>
          <input type="text" name="title" placeholder="Digite o título" />
        </label>
        <label>
          <span>Data do evento:</span>
          <input type="date" name="date" />
        </label>
        <label>
          <span>Imagem:</span>
          <input
            type="text"
            name="image"
            placeholder="Insira a url da imagem"
          />
        </label>
        <label>
          <span>Cor do tema:</span>
          <input type="color" name="cor" />
        </label>
        <input type="submit" value="Enviar"></input>
      </form>
    </div>
  );
};

export default Home;
