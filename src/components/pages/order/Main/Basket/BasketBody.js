import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function BasketBody() {
  return (
    <BasketBodyStyled>
      <span>Votre commande est vide.</span>
    </BasketBodyStyled>
  );
}

const BasketBodyStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${theme.colors.background_white};

  max-height: 100%;
  overflow-y: scroll;

  z-index: 2;
  .empty {
    justify-content: center;
    font-size: ${theme.font.sizes.P4};
    font-family: ${theme.font.families.stylish};
    color: ${theme.colors.greyBlue};
  }

  .produits {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;

    .product {
      display: grid;
      grid-template-columns: 1fr 3fr 1fr 1fr;
      align-items: center;
      box-sizing: border-box;
      width: 90%;
      height: 85px;
      padding: 8px 16px;
      margin-bottom: 20px;
      border-radius: ${theme.borderRadius.extraRound};

      background-color: red;

      .image {
        width: 85px;
        height: 60px;
        background-color: aliceblue;

        object-fit: contain;
      }

      .description {
        margin-left: 14px;

        .title {
          font-size: ${theme.font.sizes.P3};
          line-height: 32px;
          font-family: ${theme.font.families.stylish};
          font-weight: ${theme.font.weights.bold};
        }

        .prix {
          color: ${theme.colors.primary};
          font-size: ${theme.font.sizes.SM};
        }
      }

      .quantity {
        color: ${theme.colors.primary};
      }
    }
  }
`;
