import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

export default function BasketCard({ imageSource, title, price, quantity }) {
  return (
    <BasketCardStyled>
      <img src={imageSource} alt="produit" />
      <div className="description">
        <div className="title">{title}</div>
        <div className="prix">{price}</div>
      </div>
      <div className="quantity">x{quantity}</div>
    </BasketCardStyled>
  );
}

const BasketCardStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr 1fr;
  align-items: center;
  box-sizing: border-box;
  width: 90%;
  height: 85px;
  padding: 8px 16px;
  margin: 20px 0;
  border-radius: ${theme.borderRadius.extraRound};

  background-color: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.medium};

  img {
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
`;
