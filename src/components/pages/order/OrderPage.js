import { Link, useParams } from "react-router-dom";

export default function OrderPage() {
  //Le hook useParams permet de récupérer les paramètres de l'URL (passé dans le path de la route)
  const { username } = useParams();

  return (
    <div>
      <h1>Bonjour {username}</h1>
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </div>
  );
}
