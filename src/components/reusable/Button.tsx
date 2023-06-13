import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../theme";

interface ButtonProps {
  label?: string;
  Icon?: React.ReactNode;
  iconPos?: "left" | "right";
  variant: "primary" | "add";
  size: "small" | "medium" | "large" | "xlarge";
  onClick: () => void;
  className?: string;
}

export default function Button({
  label,
  Icon,
  iconPos,
  variant,
  size,
  onClick,
}: ButtonProps) {
  return (
    <ButtonStyled variant={variant} size={size} onClick={onClick}>
      {iconPos === "left" && Icon}
      <p>{label}</p>
      {iconPos === "right" && Icon}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button<ButtonProps>`
  box-sizing: border-box;
  border-radius: ${theme.borderRadius.round};
  gap: ${theme.spacing.xs};
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing.sm};
  font-weight: ${theme.font.weights.bold};
  line-height: 1;
  color: ${theme.colors.white};

  ${({ size }) => size === "small" && getSmallSize()}
  ${({ size }) => size === "medium" && getMediumSize()}
  ${({ size }) => size === "large" && getLargeSize()}
  ${({ size }) => size === "xlarge" && getExtraLargeSize()}

  ${({ variant }) => variant === "primary" && getPrimaryStyle()}
  ${({ variant }) => variant === "add" && getAddStyle()}
`;

const getPrimaryStyle = () => {
  return css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    border: 1px solid ${theme.colors.primary};
    cursor: pointer;
    transition: background-color 0.2s ease-out;

    &:hover {
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};

      &:active {
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
      }
    }
  `;
};

const getAddStyle = () => {
  return css`
    background-color: ${theme.colors.success};
    color: ${theme.colors.white};
    border: 1px solid ${theme.colors.success};
    font-size: ${theme.font.sizes.XS};
    transition: background-color 0.2s ease-out;

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

const getSmallSize = () => {
  return css`
    width: 30%;
    height: ${theme.button.sizes.height.MD};
    font-size: ${theme.font.sizes.XS};
    padding: ${theme.button.paddings.SM};
  `;
};

const getMediumSize = () => {
  return css`
    width: ${theme.button.sizes.width.MD};
    height: ${theme.button.sizes.height.LG};
    font-size: ${theme.font.sizes.XS};
    padding: ${theme.button.paddings.MD};
  `;
};

const getLargeSize = () => {
  return css`
    width: ${theme.button.sizes.width.LG};
    height: ${theme.button.sizes.height.SM};
    padding: ${theme.button.paddings.LG};
  `;
};

const getExtraLargeSize = () => {
  return css`
    width: ${theme.button.sizes.width.XL};
    height: ${theme.button.sizes.height.LG};
    font-size: ${theme.font.sizes.SM};

    @media ${theme.devices.mobile} {
      height: 48px;
      width: 245px;
      padding: 3px 10px;
      font-size: ${theme.font.sizes.XS};
    }
  `;
};
