import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import { EMPTY_BASKET_MESSAGE } from "../../../../../ts/enum";
import { slideFromLeft } from "../../../../../keyframes/animations";

export default function EmptyBasketMessage() {
  return (
    <EmptyBasketMessageStyled>{EMPTY_BASKET_MESSAGE}</EmptyBasketMessageStyled>
  );
}

const EmptyBasketMessageStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${theme.font.sizes.P3};
  font-weight: ${theme.font.weights.regular};
  font-family: ${theme.font.families.stylish};
  color: ${theme.colors.greyBlue};

  animation: ${slideFromLeft} ${theme.animations.speed.fast} ease-in-out;
`;
