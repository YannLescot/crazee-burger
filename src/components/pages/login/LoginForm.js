import React, { useState } from "react";

export default function LoginForm() {
  //State
  const [name, setName] = useState("");

  //Comportements
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bonjour ${name}`);
    setName("");
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  //Affichage
  return (
    <div>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Entrez votre prénom..."
          value={name}
          onChange={handleInputChange}
          required
        />
        <button>Accédez à votre espace</button>
      </form>
    </div>
  );
}
