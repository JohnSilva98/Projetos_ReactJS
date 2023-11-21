import React from "react";

const UserForm = () => {
  return (
    <div>
      <div className="form-control">
        <label htmlFor="name">Nome: </label>
        <input
          type="text"
          name="text"
          id="name"
          placeholder="Digite o seu nome: "
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="email">E-mail: </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite o seu e-mai: "
          required
        />
      </div>
    </div>
  );
};

export default UserForm;
