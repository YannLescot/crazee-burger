import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/F03_logo-orange.png";
import { theme } from "../../theme/index.js";

export default function Logo({ scale }) {
  return (
    <LogoStyled scale={scale}>
      <h1>CRAZEE</h1>
      <img src={logo} alt="logo" />
      <h1>BURGER</h1>
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
  scale: ${(props) => props.scale};
  display: flex;
  align-items: center;

  h1 {
    display: inline;
    text-align: center;
    margin: 0px;

    font-family: "Amatic SC", cursive;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-size: ${theme.fonts.size.P5};
    font-weight: ${theme.fonts.weight.bold};
    line-height: 1em;

    color: ${theme.colors.primary};
  }
  img {
    object-fit: contain;
    height: 75px;
    width: 100px;
    margin: 0 5px;
  }
`;
