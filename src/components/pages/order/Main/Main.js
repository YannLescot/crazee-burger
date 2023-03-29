import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

export default function Main() {
  return (
    <MainStyled>
      {/* <div className="basket">Basket</div> */}
      <Menu />
      <div className="adminPanel">
        <div className="tabs">
          <button className="collapse">
            <FiChevronDown className="icon" />
          </button>
          <button className="addProduct">
            <AiOutlinePlus className="icon" />
            Ajouter un produit
          </button>
          <button className="editProduct">
            <MdModeEditOutline className="icon" />
            Modifier un produit
          </button>
        </div>
        <div className="adminPanelBody">
          <span>Ajouter un produit</span>
        </div>
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr;
  max-height: 90%;
  background-color: ${theme.colors.background_white};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  overflow-y: auto;

  .adminPanel {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 4fr;
    width: 1400px;
    height: 293px;
    position: absolute;
    align-self: flex-end;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};

    .tabs {
      margin-left: 71px;
      display: flex;
      align-items: center;

      button {
        background-color: ${theme.colors.white};
        padding: 0px 22px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 15px;
        border: 1px solid ${theme.colors.greyLight};
        color: ${theme.colors.greyBlue};
        font-size: 16px;
        border-top-left-radius: ${theme.borderRadius.round};
        border-top-right-radius: ${theme.borderRadius.round};

        &:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      }

      .collapse {
        height: 100%;
        width: 60px;
      }

      .addProduct {
        font-size: 16px;
        font-weight: ${theme.fonts.weight.regular};
        height: 100%;
        width: 212px;
      }

      .editProduct {
        font-size: 16px;
        font-weight: ${theme.fonts.weight.regular};
        height: 100%;
        width: 212px;
      }
    }

    .adminPanelBody {
      background-color: ${theme.colors.white};
      width: 1365px;
      height: 207px;
      padding: 21px 17px;
      border-bottom-left-radius: ${theme.borderRadius.extraRound};
      border-bottom-right-radius: ${theme.borderRadius.extraRound};
      border: 1px solid ${theme.colors.greyLight};
    }
  }

  .adminPanelBody {
    width: 1366px;
    height: 208px;
    padding: 21px 17px;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    box-shadow: ${theme.shadows.medium};
  }

  /* .basket {
    background: pink;
  } */
`;
