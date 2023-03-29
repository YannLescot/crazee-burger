import React, { useContext } from "react";
import styled from "styled-components";
import AdminContext from "../../../../../context/AdminContext";
import { theme } from "../../../../../theme";
import PanelBody from "./PanelBody";
import PanelTabs from "./PanelTabs";

export default function AdminPanel() {
  const { isPanelCollapsed } = useContext(AdminContext);

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
  width: 1400px;
  height: 293px;
  position: absolute;
  align-self: flex-end;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
`;
