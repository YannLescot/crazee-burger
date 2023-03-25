import React from "react";
import styled from "styled-components";
import PrimaryButton from "./PrimaryButton";
import { formatPrice } from "../../utils/maths";

export default function ProductCard({
  imageSource,
  title,
  price,
  ...extraProps
}) {
  return (
    <ProductCardStyled>
      <div className="card">
        <img src={imageSource} alt="" className="productImg" />
        <div className="productInfo">
          <strong className="productName">{title}</strong>
          <div className="productBuy">
            <p className="price">{`${formatPrice(price)}`}</p>
            <PrimaryButton label="Ajouter" className="add" />
          </div>
        </div>
      </div>
    </ProductCardStyled>
  );
}

const ProductCardStyled = styled.div``;
