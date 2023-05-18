import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import styled from "styled-components";
import { theme } from "../../theme";

const ProductDetails = ({ content }) => {
  return (
    <ProductDetailsStyled>
      <AiOutlineInfoCircle className="icon" />
      <div className="productDetails">{content}</div>
    </ProductDetailsStyled>
  );
};

export default ProductDetails;

const ProductDetailsStyled = styled.div`
  .icon {
    cursor: pointer;
    position: absolute;
    bottom: 2px;

    font-size: 22px;
    z-index: 1;
  }

  .productDetails {
    display: none;
    font-size: ${theme.font.sizes.XS};
  }

  &:hover {
    .productDetails {
      display: block;
      width: 160px;
      height: 175px;

      position: relative;
      top: 0;
      left: 0;
      margin-left: 20px;
      margin-top: 195px;

      background-color: rgba(255, 255, 255, 0.9);
      border-radius: ${theme.borderRadius.round};
      border: 1px solid ${theme.colors.dark};
      padding: 5px 10px;
      box-sizing: border-box;

      z-index: 2;
    }
  }
`;
