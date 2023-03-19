import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

export default function PrimaryButton({ label, Icon, ...extraProps }) {
  return (
    <PrimaryButtonStyled>
      <span>{label}</span>
      {Icon && Icon}
    </PrimaryButtonStyled>
  );
}

const PrimaryButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 550px;
  height: 75px;
  gap: ${theme.spacing.xs};
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  border: none;
  border-radius: ${theme.borderRadius.round};
  span {
    font-size: ${theme.fonts.size.P2};
    font-weight: ${theme.fonts.weight.bold};
  }

  .icon {
    color: ${theme.colors.white};
  }

  &:hover {
    border: 2px solid ${theme.colors.primary};
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
    cursor: pointer;
    .icon {
      color: ${theme.colors.primary};
    }
  }
`;
