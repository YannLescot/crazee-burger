import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import { theme } from "../../../../../theme";
import TextInput from "../../../../reusable/TextInput";
import { getTabSelected, tabsConfig } from "./tabsConfig";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import PrimaryButton from "../../../../reusable/PrimaryButton";

export default function PanelBody() {
  const { activeTab } = useContext(OrderContext);

  const tabs = tabsConfig;
  const tabSelected = getTabSelected(tabs, activeTab);

  return (
    <PanelBodyStyled>
      {/*tabSelected && <p>{tabSelected.label}</p>*/}
      <div className="addProductLayout">
        <div className="imageProduct">Aucune image</div>{" "}
        <div className="form">
          <TextInput
            value=""
            onChange={() => {}}
            placeholder={"Nom du produit (ex: Super Burger)"}
            Icon={<FaHamburger className="icon" />}
            className="textInput"
          />
          <TextInput
            value=""
            onChange={() => {}}
            placeholder={
              "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
            }
            Icon={<BsFillCameraFill className="icon" />}
            className="textInput"
          />
          <TextInput
            value=""
            onChange={() => {}}
            placeholder={"Prix"}
            Icon={<MdOutlineEuro className="icon" />}
            className="textInput"
          />
          <PrimaryButton
            label={"Ajouter un nouveau produit au menu"}
            variant="add"
            className={"addButton"}
          />
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
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid ${theme.colors.greyLight};
      border-radius: ${theme.borderRadius.round};
      width: 215px;
      height: 120px;
      font-size: ${theme.fonts.size.P0};
      font-weight: ${theme.fonts.weight.regular};
      color: ${theme.colors.greySemiDark};
    }
    .form {
      background-color: blue;
      display: grid;
      grid-template-rows: repeat(4, 1fr);
      grid-row-gap: 8px;
      .textInput {
        //background-color: yellow;
        width: 645px;
        height: 35px;
      }
      .addButton {
        //background-color: orange;
        width: 275px;
        height: 35px;
      }
    }
  }

  p {
    padding: 0 19px;
  }
`;
