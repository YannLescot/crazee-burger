import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import { theme } from "../../../../../theme";
import TextInput from "../../../../reusable/TextInput";
import { getTabSelected, tabsConfig } from "./tabsConfig";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { FiCheck } from "react-icons/fi";
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
            variant="minimalist"
            className="textInput"
          />
          <TextInput
            value=""
            onChange={() => {}}
            placeholder={
              "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
            }
            Icon={<BsFillCameraFill className="icon" />}
            variant="minimalist"
            className="textInput"
          />
          <TextInput
            value=""
            onChange={() => {}}
            placeholder={"Prix"}
            Icon={<MdOutlineEuro className="icon" />}
            variant="minimalist"
            className="textInput"
          />
          <div className="addSection">
            {" "}
            <PrimaryButton
              label={"Ajouter un nouveau produit au menu"}
              variant="add"
              className={"addButton"}
            />
            <span className="succesAdd">
              {" "}
              <FiCheck className="icon" /> Ajouté avec succès !
            </span>
          </div>
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
  //background-color: green;

  .addProductLayout {
    width: 50%
    background-color: orange;
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
      //background-color: blue;
      display: grid;
      grid-template-rows: repeat(4, 1fr);
      grid-row-gap: 8px;
          height: 165px;
    max-height: 165px;
      .textInput {
        //background-color: yellow;
        width: 645px;
        height: 35px;
      }
      .addSection {
        display: flex;
              .addButton {
        //background-color: orange;
        width: 275px;
        height: 34px;
      }
              span {
          display: flex;
          align-items: center;
          font-size: ${theme.fonts.size.SM};
          margin: 8px 18px;
          color: ${theme.colors.success};


          .icon {
            border: 1px solid ${theme.colors.success};
            border-radius: ${theme.borderRadius.circle};
            margin-right: 8px;
          }
          //padding: 18px 15px;
        }
      }
    }
  }

  p {
    padding: 0 19px;
  }
`;
