import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu";

export default function Main() {
  return (
    <MainStyled>
      {/* <div className="basket">Basket</div> */}
      <Menu />
      <div className="adminPanel">
        <div className="tabs">
          <button className="collapse"></button>
          <button className="addProduct"></button>
          <button className="addProduct"></button>
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
    background-color: blue;
    width: 1400px;
    height: 293px;
    position: absolute;
    align-self: flex-end;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};

    .tabs {
      background-color: green;
      display: flex;

      .collapse {
        background-color: pink;
        margin-left: 71px;
        height: 100%;
        width: 60px;
      }

      .addProduct {
        background-color: yellow;
        height: 100%;
        width: 212px;
      }
    }

    .adminPanelBody {
      background-color: red;
      width: 1366px;
      height: 208px;
      padding: 21px 17px;
      border-bottom-left-radius: ${theme.borderRadius.extraRound};
      border-bottom-right-radius: ${theme.borderRadius.extraRound};

      span {
        color: white;
      }
    }
  }

  .adminPanelBody {
    background-color: red;
    width: 1366px;
    height: 208px;
    padding: 21px 17px;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};

    span {
      color: white;
    }
  }

  /* .basket {
    background: pink;
  } */
`;
