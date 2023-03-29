import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import PanelTabs from "./PanelTabs";

export default function AdminPanel() {
  return (
    <AdminPanelStyled>
      <PanelTabs />
      <div className="adminPanelBody">
        <span>Ajouter un produit</span>
      </div>
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 4fr;
  width: 1400px;
  height: 293px;
  position: absolute;
  align-self: flex-end;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};

  .adminPanelBody {
    background-color: ${theme.colors.white};
    width: 1365px;
    height: 207px;
    padding: 21px 17px;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    border: 1px solid ${theme.colors.greyLight};
    box-shadow: ${theme.shadows.subtle};
  }
`;
