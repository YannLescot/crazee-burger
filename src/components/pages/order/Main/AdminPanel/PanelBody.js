import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import { theme } from "../../../../../theme";

export default function PanelBody() {
  const { activeTab } = useContext(OrderContext);

  return (
    <PanelBodyStyled>
      {activeTab === "add" && <span>Ajouter un produit</span>}
      {activeTab === "edit" && <span>Modifier un produit</span>}
    </PanelBodyStyled>
  );
}

const PanelBodyStyled = styled.div`
  background-color: ${theme.colors.white};
  width: 1364px;
  height: 207px;
  padding: 21px 17px;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
`;
