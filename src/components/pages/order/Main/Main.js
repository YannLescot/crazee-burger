import styled from "styled-components";
import { theme } from "../../../../theme";
import AdminPanel from "./AdminPanel/AdminPanel";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";
import Menu from "./Menu/Menu";

export default function Main() {
  const { isAdmin } = useContext(OrderContext);

  return (
    <MainStyled>
      <div className="basket">
        <div className="header">
          <div className="total">TOTAL</div>
          <div className="price">PRICE</div>
        </div>
        <div className="body">BODY</div>
        <div className="footer">FOOTER</div>
      </div>
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
  grid-template-columns: 25% 1fr;
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

  .basket {
    display: grid;
    grid-template-rows: 9% 1fr 9%;
    background: pink;

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 18px;
      background: red;

      .total {
        background: yellow;
      }

      .price {
        background: orange;
      }
    }

    .footer {
      display: flex;
      justify-content: center;
      align-items: center;
      background: green;
    }

    .body {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: blue;
    }
  }
`;
