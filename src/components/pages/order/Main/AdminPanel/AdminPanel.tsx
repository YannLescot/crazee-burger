import React, { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import PanelBody from "./PanelBody/PanelBody";
import PanelTabs from "./PanelTabs";
import { theme } from "../../../../../theme";

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
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  pointer-events: none;
  z-index: 4;

  & > * {
    pointer-events: all;
  }

  animation: ${theme.animations.slideFromBottom} 0.5s ease-out;
`;
