import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import OrderBody from "./OrderBody";

export default function OrderPage() {
  /*
    Le hook useParams permet de récupérer les paramètres de l'URL (passé dans le path de la route)
    const { username } = useParams();
      <h1>Bonjour {username}</h1>
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
  */

  return (
    <OrderPageStyled>
      <OrderBody />
    </OrderPageStyled>
  );
}

const OrderPageStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100vw;

  background-color: ${theme.colors.primary};
`;
