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
      {/*<div className="basket">Basket</div>*/}
      <div className="menu-and-admin">
        <Menu />
        {isAdmin && <AdminPanel />}
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  flex: 1;
  display: grid;
  //grid-template-columns: 25% 1fr;
  height: calc(95vh - 10vh);
  background-color: ${theme.colors.background_white};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: ${theme.shadows.strong};

  .menu-and-admin {
    display: grid;
    position: relative;
    overflow-y: hidden;
  }

  /*.basket {
    background: pink;
  }*/
`;
