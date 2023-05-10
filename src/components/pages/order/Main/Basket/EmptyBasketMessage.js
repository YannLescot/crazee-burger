import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function EmptyBasketMessage() {
  return (
    <EmptyBasketMessageStyled>
      Votre commande est vide.
    </EmptyBasketMessageStyled>
  );
}

const EmptyBasketMessageStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${theme.font.sizes.P4};
  font-family: ${theme.font.families.stylish};
  color: ${theme.colors.greyBlue};
`;
