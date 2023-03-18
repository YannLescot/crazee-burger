import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/F03_logo-orange.png";
import { theme } from "../../theme/index.js";

export default function CrazeeTxtLogo() {
  return (
    <CrazeeTxtLogoStyled>
      <h1>CRAZEE</h1>
      <img src={logo} alt="logo" />
      <h1>BURGER</h1>
    </CrazeeTxtLogoStyled>
  );
}

const CrazeeTxtLogoStyled = styled.div`
  //padding: ${theme.spacing.md};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing.lg};

  h1 {
    font-family: "Amatic SC", cursive;
    font-size: 130px;
    font-weight: ${theme.weights.bold};
    color: ${theme.colors.primary_burger};
  }
  img {
    width: 280px;
  }
`;
