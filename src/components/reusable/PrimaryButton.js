import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

export default function PrimaryButton({ label, Icon, className }) {
  return (
    <PrimaryButtonStyled className={className}>
      <span>
        {label}
        {Icon && Icon}
      </span>
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

  border: none;
  border-radius: ${theme.borderRadius.round};

  span {
    display: flex;
    align-items: center;
    gap: ${theme.spacing.sm};
    font-weight: ${theme.fonts.weight.bold};
    line-height: 1;
    color: ${theme.colors.white};
  }

  &:hover {
    transition: background-color 0.2s ease-out;
    border: 1px solid ${theme.colors.primary};
    background-color: ${theme.colors.white};
    span {
      color: ${theme.colors.primary};
    }
    cursor: pointer;
  }
`;
