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
  margin-bottom: ${theme.spacing.lg};
  transform: scale(2);

  h1 {
    display: inline;
    text-align: center;

    font-family: "Amatic SC", cursive;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-size: ${theme.fonts.size.P6};
    font-weight: ${theme.fonts.weight.bold};
    line-height: 1em;

    color: ${theme.colors.primary};
  }
  img {
    object-fit: contain;
    object-position: center;
    height: 75px;
    width: 100px;
    margin: 0 5px;
  }
`;
