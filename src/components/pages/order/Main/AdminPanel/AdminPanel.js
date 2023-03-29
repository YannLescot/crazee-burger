import React, { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import { theme } from "../../../../../theme";
import PanelBody from "./PanelBody";
import PanelTabs from "./PanelTabs";

export default function AdminPanel() {
  const { isPanelCollapsed } = useContext(OrderContext);

  return (
    <AdminPanelStyled>
      <PanelTabs />
      {!isPanelCollapsed && <PanelBody />}
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  align-self: flex-end;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
`;
