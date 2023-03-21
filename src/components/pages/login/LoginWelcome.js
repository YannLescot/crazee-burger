import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme/index.js";

export default function LoginWelcome() {
  return (
    <LoginWelcomeStyled>
      <h1>Bienvenue chez nous !</h1>
      <hr />
    </LoginWelcomeStyled>
  );
}

const LoginWelcomeStyled = styled.div`
  margin-top: ${theme.spacing.xxl};
  gap: ${theme.spacing.lg};
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 0px;
    font-family: "Amatic SC", cursive;
    font-size: ${theme.fonts.size.P5};
    font-weight: ${theme.fonts.weight.bold};
    color: ${theme.colors.white};
  }

  hr {
    border: none;
    flex-shrink: 0;
    min-width: 400px;
    height: 3px;
    background-color: ${theme.colors.loginLine};
  }
`;
