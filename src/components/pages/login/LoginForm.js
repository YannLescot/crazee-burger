import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginForm() {
  //State
  const [name, setName] = useState("");

  //Comportements
  const HandleSubmit = (e) => {
    e.preventDefault();
    setName("");
  };

  const HandleInputChange = (e) => {
    setName(e.target.value);
  };

  //Affichage
  return (
    <form onSubmit={HandleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
      <input
        type="text"
        placeholder="Entrez votre prénom..."
        value={name}
        onChange={HandleInputChange}
        required
      />
      <Link to="/order">
        <button>Accédez à votre espace</button>
      </Link>
    </form>
  );
}
