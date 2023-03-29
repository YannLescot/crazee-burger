import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function PanelBody() {
  return (
    <PanelBodyStyled>
      <span>Ajouter un produit</span>
    </PanelBodyStyled>
  );
}

const PanelBodyStyled = styled.div`
  background-color: ${theme.colors.white};
  width: 1365px;
  height: 207px;
  padding: 21px 17px;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
`;
