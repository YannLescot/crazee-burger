import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../theme";

export default function Button({
  label,
  Icon,
  variant,
  size,
  padding,
  onClick,
}) {
  return (
    <ButtonStyled
      variant={variant}
      size={size}
      padding={padding}
      onClick={onClick}
    >
      {label}
      {Icon && Icon}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
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

  ${({ padding }) => padding === "small" && getSmallPadding()}
  ${({ padding }) => padding === "medium" && getMediumPadding()}
  ${({ padding }) => padding === "large" && getLargePadding()}


  ${({ variant }) => variant === "primary" && getPrimaryStyle()}
  ${({ variant }) => variant === "add" && getAddStyle()}
`;

const getPrimaryStyle = () => {
  return css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    border: 1px solid ${theme.colors.primary};
    cursor: pointer;

    &:hover {
      transition: background-color 0.2s ease-out;
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};

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
    background-color: ${theme.colors.success};
    color: ${theme.colors.white};
    border: 1px solid ${theme.colors.success};
    font-size: ${theme.font.sizes.XS};

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
    width: ${theme.button.sizes.width.SM};
    height: ${theme.button.sizes.height.MD};
    font-size: ${theme.font.sizes.XS};
  `;
};

const getMediumSize = () => {
  return css`
    width: ${theme.button.sizes.width.MD};
    height: ${theme.button.sizes.height.LG};
    font-size: ${theme.font.sizes.XS};
  `;
};

const getLargeSize = () => {
  return css`
    width: ${theme.button.sizes.width.LG};
    height: ${theme.button.sizes.height.SM};
  `;
};

const getExtraLargeSize = () => {
  return css`
    width: ${theme.button.sizes.width.XL};
    height: ${theme.button.sizes.height.LG};
    font-size: ${theme.font.sizes.SM};
  `;
};

const getSmallPadding = () => {
  return css`
    padding: ${theme.button.paddings.SM};
  `;
};

const getMediumPadding = () => {
  return css`
    padding: ${theme.button.paddings.MD};
  `;
};

const getLargePadding = () => {
  return css`
    padding: ${theme.button.paddings.LG};
  `;
};
