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
  height: 30px;
  width: 130px;
  border: 1px solid ${theme.colors.primary};
  border-radius: ${theme.borderRadius.round};
  padding: 5px;

  background: ${theme.colors.primary};
  color: ${theme.colors.white};

  transition: all 0.3s ease-in-out;

  overflow: hidden;

  cursor: pointer;

  p {
    display: none;
  }

  transition: all 0.1s ease-in-out;
  &:hover {
    transition: all 0.1s ease-in-out;
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
    p {
      color: ${theme.colors.primary};
    }
  }

  p {
    color: ${theme.colors.white};
    display: block;
    font-size: ${theme.font.sizes.SM};
    flex-shrink: 0;
  }
`;
