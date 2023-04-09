import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { theme } from "../../theme/index.js";

const TextInput = React.forwardRef(
  (
    {
      type,
      value,
      index,
      onChange,
      placeholder,
      Icon,
      variant,
      productToEdit,
      tab,
    },
    ref
  ) => {
    return (
      <TextInputStyled variant={variant}>
        <div className="icon">{Icon && Icon}</div>
        <input
          ref={ref}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type={type ? type : "text"}
        />
      </TextInputStyled>
    );
  }
);

export default TextInput;

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
  }

  .icon {
    font-size: ${theme.fonts.size.SM};
  }

  ${({ variant }) => variant === "minimalist" && getMinimalistStyle()}
  ${({ variant }) => variant === "normal" && getNormalStyle()}
`;

const getNormalStyle = () => {
  return css`
    max-width: 400px;
    height: 54px;
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
    width: 100%;
    height: 35px;
    background-color: ${theme.colors.background_white};

    input {
      width: 90%;
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
