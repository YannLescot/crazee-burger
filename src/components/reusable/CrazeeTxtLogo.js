import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/F03_logo-orange.png";
import { theme } from "../../theme/index.js";

export default function CrazeeTxtLogo({ scaleValue }) {
  return (
    <CrazeeTxtLogoStyled>
      <h1>CRAZEE</h1>
      <img src={logo} alt="logo" />
      <h1>BURGER</h1>
    </CrazeeTxtLogoStyled>
  );
}

const CrazeeTxtLogoStyled = styled.div`
  display: flex;
  align-items: center;
  transform: scale(2.5);

  h1 {
    display: inline;
    text-align: center;

    font-family: "Amatic SC", cursive;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-size: ${theme.fonts.P4};
    font-weight: ${theme.weights.bold};
    line-height: 1em;

    color: ${theme.colors.primary_burger};
  }
  img {
    object-fit: contain;
    object-position: center;
    height: 60px;
    width: 80px;
    margin: 0 5px;
  }
`;
