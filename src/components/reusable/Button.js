import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../theme";

export default function Button({ label, Icon, variant }) {
  return (
    <ButtonStyled variant={variant}>
      {label}
      {Icon && Icon}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: ${theme.spacing.xs};
  border-radius: ${theme.borderRadius.round};
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  font-weight: ${theme.fonts.weight.bold};
  line-height: 1;
  color: ${theme.colors.white};

  ${({ variant }) => variant === "small" && getSmallStyle()}
  ${({ variant }) => variant === "large" && getLargeStyle()}
  ${({ variant }) => variant === "add" && getAddStyle()}
`;

const getSmallStyle = () => {
  return css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    border: 1px solid ${theme.colors.primary};
    font-size: ${theme.fonts.size.XS};
    cursor: pointer;
    padding: 12px;

    &:hover {
      transition: background-color 0.2s ease-out;
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
      cursor: pointer;

      &:active {
        transition: background-color 0.2s ease-out;
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
      }
    }
  `;
};

const getLargeStyle = () => {
  return css`
    width: 100%;
    height: 54px;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    border: 1px solid ${theme.colors.primary};
    padding: 18px 24px;

    font-size: ${theme.fonts.size.SM};

    &:hover {
      transition: background-color 0.2s ease-out;
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
      cursor: pointer;

      &:active {
        transition: background-color 0.2s ease-out;
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
      }
    }
  `;
};

const getAddStyle = () => {
  return css`
    width: 275px;
    height: 34px;
    background-color: ${theme.colors.success};
    color: ${theme.colors.white};
    border: 1px solid ${theme.colors.success};
    padding: 0px 24px;
    font-size: ${theme.fonts.size.XS};

    &:hover {
      background-color: ${theme.colors.white};
      color: ${theme.colors.success};

      &:active {
        background-color: ${theme.colors.success};
        color: ${theme.colors.white};
      }
    }
  `;
};
