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
      <img src={imageSource} alt="" className="productImg" />
      <div className="productInfo">
        <strong className="productName">{title}</strong>
        <div className="productBuy">
          <p className="price">{`${formatPrice(price)}`}</p>
          <PrimaryButton label="Ajouter" className="add" />
        </div>
      </div>
    </ProductCardStyled>
  );
}

const ProductCardStyled = styled.div`
  margin: 20px 40px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 330px;
  width: 240px;

  gap: ${theme.spacing.xs};

  border-radius: ${theme.borderRadius.extraRound};
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);

  .productImg {
    margin-top: 30px;
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
  }

  .productBuy {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .price {
    font-size: 16px;
  }

  .add {
    width: 95px;
    height: 38px;

    span {
      font-size: ${theme.fonts.size.XS};
    }
  }
`;
