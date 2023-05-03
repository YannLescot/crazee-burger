import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function EmptyBasket() {
  return <EmptyBasketStyled>Votre commande est vide.</EmptyBasketStyled>;
}

const EmptyBasketStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${theme.font.sizes.P4};
  font-family: ${theme.font.families.stylish};
  color: ${theme.colors.greyBlue};
`;
