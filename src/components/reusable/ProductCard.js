import React from "react";
import styled from "styled-components";
import PrimaryButton from "./PrimaryButton";
import { formatPrice } from "../../utils/maths";
import { theme } from "../../theme";

export default function ProductCard({
  imageSource,
  title,
  price,
  ...extraProps
}) {
  return (
    <ProductCardStyled>
      <img src={imageSource} alt="" />
      <div className="productInfo">
        <strong className="productName">{title}</strong>
        <div className="productInfoBottomEnd">
          <p className="priceTag">{`${formatPrice(price)}`}</p>
          <PrimaryButton
            label="Ajouter"
            className="productCard-primary-button"
          />
        </div>
      </div>
    </ProductCardStyled>
  );
}

const ProductCardStyled = styled.div`
  margin: 0 40px 0 40px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 330px;
  width: 240px;

  gap: ${theme.spacing.xs};

  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.extraRound};
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);

  img {
    margin-top: 30px;
    margin-bottom: 7px;
    width: 200px;
    height: 145px;
    object-fit: contain;
  }

  .productInfo {
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .productName {
    width: 100%;
    font-family: "Amatic SC", cursive;
    font-size: 36px;
    font-weight: ${theme.fonts.weight.bold};
    margin: 0 5px;
  }

  .productInfoBottomEnd {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 5px;
  }

  .priceTag {
    font-size: 16px;
    font-weight: ${theme.fonts.weight.regular};
    color: ${theme.colors.primary};
  }

  .productCard-primary-button {
    width: 95px;
    height: 38px;

    span {
      font-size: ${theme.fonts.size.XXS};
    }
  }
`;
