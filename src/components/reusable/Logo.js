import React from "react";
import styled from "styled-components";
import { theme } from "../../theme/index.js";
import { FaToriiGate } from "react-icons/fa";

export default function Logo({ className, onClick }) {
  return (
    <LogoStyled className={className} onClick={onClick}>
      <h1 className="firstWord">OISHII</h1>
      <FaToriiGate className="icon" />
      <h1>RAMEN</h1>
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;

  h1 {
    display: inline;
    text-align: center;
    margin: 0px;
    font-family: ${theme.font.families.stylish};
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-size: ${theme.font.sizes.P5};
    font-weight: ${theme.font.weights.medium};
    line-height: 1em;
    color: ${theme.colors.primary};
    letter-spacing: 0.5px;
  }

  .icon {
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.P5};
    padding: 0 12px;
    font-weight: ${theme.font.weights.regular};
    margin-bottom: 7px;
  }

  .firstWord {
    margin-left: 15px;
    letter-spacing: 4px;
  }
`;
