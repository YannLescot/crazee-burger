import React, { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import EmptyBasket from "./EmptyBasket";
import BasketCards from "./BasketCards";
import { isEmpty } from "../../../../../utils/array";
import { theme } from "../../../../../theme";
import { RiDeleteBin2Line } from "react-icons/ri";
import { useBasket } from "../../../../../hooks/useBasket";

export default function BasketBody() {
  const { basket, handleEmptyBasket } = useContext(OrderContext);
  const isBasketEmpty = isEmpty(basket);

  return (
    <BasketBodyStyled>
      {isBasketEmpty ? <EmptyBasket /> : <BasketCards />}
      <div className="emptyBasketButton" onClick={handleEmptyBasket}>
        <RiDeleteBin2Line />
        <p>Vider le panier</p>
      </div>
    </BasketBodyStyled>
  );
}

const BasketBodyStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  z-index: 2;

  .emptyBasketButton {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.font.sizes.P3};
    color: ${theme.colors.white};
    width: 40px;
    height: 40px;
    border: 1px solid ${theme.colors.primary};
    border-radius: ${theme.borderRadius.circle};
    background: ${theme.colors.primary};
    position: absolute;
    bottom: 80px;
    right: 10px;

    p {
      display: none;
    }

    transition: all 0.1s ease-in-out;
    &:hover {
      padding: 0 15px;
      justify-content: flex-start;
      width: 150px;
      border-radius: ${theme.borderRadius.round};
      background: ${theme.colors.white};
      color: ${theme.colors.primary};

      transition: all 0.2s ease-in-out;

      overflow: hidden;
      p {
        color: ${theme.colors.primary};
        margin-left: 15px;
        display: block;
        font-size: ${theme.font.sizes.P0};
        flex-shrink: 0;
      }
    }
  }
`;
