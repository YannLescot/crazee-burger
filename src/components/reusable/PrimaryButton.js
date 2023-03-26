import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

export default function PrimaryButton({ label, Icon, ...extraProps }) {
  return (
    <PrimaryButtonStyled className={extraProps.className}>
      {label}
      {Icon && Icon}
    </PrimaryButtonStyled>
  );
}

const PrimaryButtonStyled = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 18px 24px;
  gap: ${theme.spacing.xs};
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  border: none;
  border-radius: ${theme.borderRadius.round};
  font-weight: ${theme.fonts.weight.bold};
  line-height: 1;
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
