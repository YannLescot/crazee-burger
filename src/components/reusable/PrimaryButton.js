import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

export default function PrimaryButton({ label, Icon, ...extraProps }) {
  return (
    <PrimaryButtonStyled className={extraProps.className}>
      <span>{label}</span>
      {Icon && Icon}
    </PrimaryButtonStyled>
  );
}

const PrimaryButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 54px;
  gap: ${theme.spacing.xs};
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  border: none;
  border-radius: ${theme.borderRadius.round};

  span {
    font-weight: ${theme.fonts.weight.bold};
  }

  .icon {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P0};
  }

  &:hover {
    border: 1px solid ${theme.colors.primary};
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
    cursor: pointer;
    .icon {
      color: ${theme.colors.primary};
    }
    &:active {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
      border: none;
    }
  }
`;
