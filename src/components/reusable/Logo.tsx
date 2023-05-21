import React from "react";
import styled from "styled-components";
import { theme } from "../../theme/index";

type LogoProps = {
  className?: string;
  onClick?: () => void;
};

export default function Logo({ className, onClick }: LogoProps) {
  return (
    <LogoStyled className={className} onClick={onClick}>
      <img src="/images/logoOishii.svg" alt="Logo" className="logoSVG" />
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;

  .logoSVG {
    width: 100%;
    height: 100%;
  }

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
