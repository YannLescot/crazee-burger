import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function BasketBody() {
  return (
    <BasketBodyStyled>
      <span>Votre commande est vide.</span>
    </BasketBodyStyled>
  );
}

const BasketBodyStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${theme.colors.background_white};

  font-size: ${theme.font.sizes.P4};
  font-family: ${theme.font.families.stylish};
  color: ${theme.colors.greyBlue};
`;
