import React from "react";
import styled from "styled-components";
import CrazeeTxtLogo from "../../reusable/CrazeeTxtLogo";
import { theme } from "../../../theme/index.js";

export default function LoginWelcome() {
  return (
    <LoginWelcomeStyled>
      <CrazeeTxtLogo />
      <span>Bienvenue chez nous !</span>
    </LoginWelcomeStyled>
  );
}

const LoginWelcomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    font-family: "Amatic SC", cursive;
    font-size: ${theme.fonts.P6};
    font-weight: ${theme.weights.bold};
    color: ${theme.colors.white};
  }
`;
