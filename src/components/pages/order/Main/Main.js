import styled from "styled-components";
import { theme } from "../../../../theme";
import AdminPanel from "./AdminPanel/AdminPanel";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";
import Menu from "./Menu/Menu";
import Basket from "./Basket/Basket";

export default function Main() {
  const { isAdmin } = useContext(OrderContext);

  return (
    <MainStyled>
      <div className="menu-and-admin">
        <Menu />
        {isAdmin && <AdminPanel />}
      </div>

      <Basket />
    </MainStyled>
  );
}

const MainStyled = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 25%;
  height: calc(95vh - 10vh);
  background-color: ${theme.colors.background_white};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  overflow: hidden;

  .menu-and-admin {
    display: grid;
    position: relative;
    overflow-y: hidden;
  }

  ::before {
    content: "";
    position: absolute;
    width: 80vw;
    height: calc(95vh - 10vh);
    box-shadow: ${theme.shadows.light};
    z-index: 1;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    pointer-events: none;
  }
`;
