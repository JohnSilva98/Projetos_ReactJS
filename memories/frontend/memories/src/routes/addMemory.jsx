import React from "react";
import axios from "axios";
import { useState } from "react";
import "./AddMemory.css";
const addMemory = () => {
  return (
    <div className="add-memory-page">
      <h2>Crie uma nova memória</h2>
      <form>
        <label>
          <p>Título</p>
          <input type="text" placeholder="Defina um título" name="title" />
        </label>
        <label>
          <p>Descrição</p>
          <textarea
            name="description"
            placeholder="Explique o que aconteceu"
          ></textarea>
        </label>
        <label>
          <p>Foto:</p>
          <input type="file" name="image" />
        </label>
        <input type="submit" value="Enviar" className="btn" />
      </form>
    </div>
  );
};

export default addMemory;
