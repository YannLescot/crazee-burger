import React from "react";
import { Link } from "react-router-dom";

export default function OrderPage() {
  return (
    <div>
      <h1>Coucou</h1>
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </div>
  );
}
