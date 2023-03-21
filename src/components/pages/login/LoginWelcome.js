import React from "react";
import styled from "styled-components";
import Logo from "../../reusable/Logo";
import { theme } from "../../../theme/index.js";

export default function LoginWelcome() {
  return (
    <LoginWelcomeStyled>
      <Logo />
      <span>Bienvenue chez nous !</span>
      <hr />
    </LoginWelcomeStyled>
  );
}

const LoginWelcomeStyled = styled.div`
  margin-top: ${theme.spacing.xxl};
  padding-top: ${theme.spacing.xxl};
  gap: ${theme.spacing.lg};
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
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
