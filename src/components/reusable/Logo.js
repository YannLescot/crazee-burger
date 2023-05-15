import React from "react";
import styled from "styled-components";
import { theme } from "../../theme/index.js";
import { ReactComponent as LogoSvg } from "../../assets/images/LogoOishiiSVG.svg";

export default function Logo({ className, onClick }) {
  return (
    <LogoStyled className={className} onClick={onClick}>
      <LogoSvg fill={theme.colors.primary} width="100%" height="100%" />
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;

  @media ${theme.devices.medium} {
    scale: 0.8;
  }

  @media ${theme.devices.small} {
    scale: 0.6;
  }

  @media ${theme.devices.mobile} {
    scale: 0.45;
  }
`;
