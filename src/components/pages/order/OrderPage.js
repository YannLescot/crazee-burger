import { Link, useParams } from "react-router-dom";

export default function OrderPage() {
  const { inputValue } = useParams();
  console.log(inputValue);
  return (
    <div>
      <h1>Coucou {inputValue}</h1>
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </div>
  );
}
