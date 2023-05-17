import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";

const LoadingMessage = () => {
  return (
    <LoadingMessageStyled>
      <h1>Chargement du menu ...</h1>
    </LoadingMessageStyled>
  );
};

export default LoadingMessage;

const LoadingMessageStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-shadow: ${theme.shadows.strong};

  h1 {
    font-family: ${theme.font.families.stylish};
    color: ${theme.colors.greyBlue};
    font-size: ${theme.font.sizes.P4};
    font-weight: ${theme.font.weights.regular};
    margin-top: 0px;
    margin-bottom: 31px;
    font-weight: ${theme.font.weights.bold};
  }
`;
