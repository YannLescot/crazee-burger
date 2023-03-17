import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
      <h1>ErrorPage</h1>
      <Link to="/">Retour à la page d'accueil</Link>
    </div>
  );
}
