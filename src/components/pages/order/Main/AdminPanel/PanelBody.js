import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import { theme } from "../../../../../theme";
import { getTabSelected, tabsConfig } from "./tabsConfig";

export default function PanelBody() {
  const { activeTab } = useContext(OrderContext);

  const tabs = tabsConfig;
  const tabSelected = getTabSelected(tabs, activeTab);

  return (
    <PanelBodyStyled>
      {/*tabSelected && <p>{tabSelected.label}</p>*/}
      <div className="addProductLayout">
        <div className="imageProduct">IMG</div>{" "}
        <div className="form">
          <div className="textInput"></div>
          <div className="textInput"></div>
          <div className="textInput"></div>
          <div className="addButton"></div>
        </div>
      </div>
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
  padding: 40px 60px;
  box-sizing: border-box;

  .addProductLayout {
    width: 50%
    background-color: green;
    display: grid;
    grid-template-columns:  1fr 3fr 2fr;
    grid-column-gap: 20px;
    .imageProduct {
      background-color: red;
      width: 215px;
      height: 120px;
    }
    .form {
      background-color: blue;
      display: grid;
      grid-template-rows: repeat(4, 1fr);
      grid-row-gap: 8px;
      .textInput {
        background-color: yellow;
        width: 645px;
        height: 35px;
      }
      .addButton {
        background-color: orange;
        width: 275px;
        height: 35px;
      }
    }
  }

  p {
    padding: 0 19px;
  }
`;
