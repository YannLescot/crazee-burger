import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";
import { theme } from "../../../../../../theme";
import { getTabSelected, getTabsConfig } from "../tabsConfig";

export default function PanelBody() {
  const { activeTab, productToEdit } = useContext(OrderContext);

  const tabs = getTabsConfig(productToEdit);
  const tabSelected = getTabSelected(tabs, activeTab);

  return (
    <PanelBodyStyled>
      {tabSelected && <div>{tabSelected.Content}</div>}
    </PanelBodyStyled>
  );
}

const PanelBodyStyled = styled.div`
  background-color: ${theme.colors.white};
  height: 250px;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
  padding: 31px 71px;
  box-sizing: border-box;

  p {
    padding: 0 19px;
  }
`;
