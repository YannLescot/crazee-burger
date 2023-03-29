import styled from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu";
import AdminPanel from "./AdminPanel/AdminPanel";
import { useContext } from "react";
import AdminContext from "../../../../context/AdminContext";

export default function Main() {
  const { isAdmin } = useContext(AdminContext);

  return (
    <MainStyled>
      {/* <div className="basket">Basket</div> */}
      <Menu />
      {isAdmin && <AdminPanel />}
    </MainStyled>
  );
}

const MainStyled = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr;
  max-height: 90%;
  background-color: ${theme.colors.background_white};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: ${theme.shadows.strong};
  overflow-y: auto;

  /* .basket {
    background: pink;
  } */
`;
