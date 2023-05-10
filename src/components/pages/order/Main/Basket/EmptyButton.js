import React, { useContext } from "react";
import { RiDeleteBin2Line } from "react-icons/ri";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import OrderContext from "../../../../../context/OrderContext";

const EmptyButton = () => {
  const { handleEmptyBasket } = useContext(OrderContext);

  return (
    <EmptyButtonStyled onClick={handleEmptyBasket}>
      <RiDeleteBin2Line className="icon" />
      <p>Vider le panier</p>
    </EmptyButtonStyled>
  );
};

export default EmptyButton;

const EmptyButtonStyled = styled.div`
  display: flex;
  justify-content: space-around;
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

  cursor: pointer;

  p {
    display: none;
  }

  transition: all 0.1s ease-in-out;
  &:hover {
    &:active {
      transition: all 0.1s ease-in-out;
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
      p {
        color: ${theme.colors.white};
      }
    }

    justify-content: flex-start;
    width: 145px;
    border-radius: ${theme.borderRadius.round};
    background: ${theme.colors.white};
    color: ${theme.colors.primary};

    transition: all 0.3s ease-in-out;

    overflow: hidden;

    .icon {
      margin-left: 5px;
    }

    p {
      color: ${theme.colors.primary};
      display: block;
      font-size: ${theme.font.sizes.SM};
      flex-shrink: 0;
      margin: 0 5px;
    }
  }
`;
