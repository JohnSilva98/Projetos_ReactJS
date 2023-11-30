import Title from "./components/Title";
import newyear from "./assets/newyear.jpg";

import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url()${newyear}` }}>
      <div className="container">
        <Title title="Contagem regressiva para 2024" />
        <div className="countdown-container">
          <Counter title="Dias" number={2} />
          <Counter title="Horas" number={2} />
          <Counter title="Minutos" number={2} />
          <Counter title="Segundos" number={2} />
        </div>
      </div>
    </div>
  );
}

export default App;
