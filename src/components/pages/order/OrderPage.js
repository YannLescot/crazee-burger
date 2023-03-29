import styled from "styled-components";
import { theme } from "../../../theme";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";
import { useState } from "react";
import AdminContext from "../../../context/AdminContext";

export default function OrderPage() {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <OrderPageStyled>
      <AdminContext.Provider value={{ isAdmin, setIsAdmin }}>
        <div className="container">
          <Navbar />
          <Main />
        </div>
      </AdminContext.Provider>
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

  .container {
    height: 95vh;
    width: 1400px;
  }
`;
