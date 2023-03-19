import React from "react";
import styled from "styled-components";
import TxtLogo from "../../reusable/TxtLogo";
import { theme } from "../../../theme/index.js";

export default function LoginWelcome() {
  return (
    <LoginWelcomeStyled>
      <TxtLogo />
      <span>Bienvenue chez nous !</span>
    </LoginWelcomeStyled>
  );
}

const LoginWelcomeStyled = styled.div`
  margin-top: ${theme.spacing.xxl};
  padding-top: ${theme.spacing.xxl};
  gap: ${theme.spacing.xl};
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    font-family: "Amatic SC", cursive;
    font-size: ${theme.fonts.size.P5};
    font-weight: ${theme.fonts.weight.bold};
    color: ${theme.colors.white};
  }
`;
