import styled from "styled-components";
import { theme } from "../../../theme";
import OrderBody from "./OrderBody";
import OrderNavbar from "./OrderNavbar";

export default function OrderPage() {
  return (
    <OrderPageStyled>
      <OrderNavbar />
      <OrderBody />
    </OrderPageStyled>
  );
}

const OrderPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100vw;

  background-color: ${theme.colors.primary};
`;
