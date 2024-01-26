import partyFetch from "../axios/config";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./Form.css";

const CreateParty = () => {
  const [services, setServices] = useState([]);

  //   load services
  useEffect(() => {
    const loadServices = async () => {
      const res = await partyFetch.get("/services");

      setServices(res.data);
    };

    loadServices();
  }, []);

  return (
    <div className="form-page">
      <h2>Crie sua próxima Festa</h2>
      <p>Defina o seu orçamento e escolha os serviços</p>
      <form>
        <label>
          <span>Nome da festa:</span>
          <input type="text" placeholder="Seja criativo..." required />
        </label>
        <label>
          <span>Anfitrião:</span>
          <input type="text" placeholder="Quem está dando a festa?" required />
        </label>
        <label>
          <span>Descrição:</span>
          <textarea
            placeholder="Conte mais sobre a festa..."
            required
          ></textarea>
        </label>
        <label>
          <span>Orçamento:</span>
          <input
            type="number"
            placeholder="Quanto você pretende investir?"
            required
          />
        </label>
        <label>
          <span>Imagem:</span>
          <input
            type="text"
            placeholder="Insira a URL de uma imagem"
            required
          />
        </label>
        <div>
          <h2>Escolha os serviços</h2>
          <div className="services-container">
            {services.length === 0 && <p>Carregando...</p>}
            {services.length > 0 &&
              services.map((service) => (
                <div className="service" key={service._id}>
                  <img src={service.image} alt={service.name} />
                  <p className="service-name">{service.name}</p>
                  <p className="service-price">R${service.price}</p>
                  <div className="checkbox-container">
                    <input type="checkbox" value={service._id} />
                    <p>Marque para solicitar</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <input type="submit" value={"criar festa"} className="btn" />
      </form>
    </div>
  );
};

export default CreateParty;
