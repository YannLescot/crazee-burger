import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../../theme";

export default function NoImage() {
  return <NoImageStyled>Aucune image</NoImageStyled>;
}

const NoImageStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${theme.borderRadius.round};
  border: 1px solid ${theme.colors.greyLight};

  width: 100%;
  height: 100%;

  font-size: ${theme.fonts.size.P0};
  font-weight: ${theme.fonts.weight.regular};
  color: ${theme.colors.greySemiDark};
`;
