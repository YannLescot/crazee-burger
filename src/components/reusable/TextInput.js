import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../theme/index.js";

export default function TextInput({
  value,
  onChange,
  placeholder,
  Icon,
  ...extraProps
}) {
  return (
    <TextInputStyled {...extraProps}>
      {Icon && Icon}
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type="text"
      />
    </TextInputStyled>
  );
}

const TextInputStyled = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border: none;
  border-radius: ${theme.borderRadius.round};

  input {
    width: 70%;
    font-size: ${theme.fonts.size.SM};
    font-weight: ${theme.fonts.weight.regular};
    border-radius: ${theme.borderRadius.round};
    border: none;

    &::placeholder {
      font-size: ${theme.fonts.size.SM};
    }

    .icon {
      font-size: ${theme.fonts.size.SM};
    }
  }

  ${(extraProps) =>
    extraProps.variant === "minimalist"
      ? getMinimalistStyle()
      : getNormalStyle()}
`;

const getNormalStyle = () => {
  return css`
    background-color: ${theme.colors.white};
    gap: ${theme.spacing.xs};

    input {
      width: 70%;

      &::placeholder {
        background: ${theme.colors.white};
        color: ${theme.colors.greyLight};
      }
    }

    .icon {
      color: ${theme.colors.greyBlue};
      margin-left: ${theme.spacing.md};
      padding: 0px 10px;
    }
  `;
};

const getMinimalistStyle = () => {
  return css`
    background-color: ${theme.colors.background_white};

    input {
      background-color: ${theme.colors.background_white};
      margin-left: 15px;

      &::placeholder {
        color: ${theme.colors.greyMedium};
      }
    }

    .icon {
      color: ${theme.colors.greyBlue};
      margin-left: 25px;
    }
  `;
};
