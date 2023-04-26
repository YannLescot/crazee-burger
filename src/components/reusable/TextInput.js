import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../theme/index.js";

const TextInput = React.forwardRef(
  (
    { type, value, onChange, name, placeholder, Icon, variant, onBlur },
    ref
  ) => {
    return (
      <TextInputStyled variant={variant}>
        <div className="icon">{Icon && Icon}</div>
        <input
          ref={ref}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          onBlur={onBlur}
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
    font-size: ${theme.font.sizes.SM};
    font-weight: ${theme.font.weights.regular};
    border-radius: ${theme.borderRadius.round};
    border: none;

    &::placeholder {
      font-size: ${theme.font.sizes.SM};
    }
  }

  .icon {
    font-size: ${theme.font.sizes.SM};
  }

  ${({ variant }) => variant === "minimalist" && getMinimalistStyle()}
  ${({ variant }) => variant === "normal" && getNormalStyle()}
`;

const getNormalStyle = () => {
  return css`
    max-width: 400px;
    height: 54px;
    background-color: ${theme.colors.white};
    gap: ${theme.spacing.sm};

    input {
      width: 70%;

      &::placeholder {
        background: ${theme.colors.white};
        color: ${theme.colors.greyLight};
      }
    }

    .icon {
      color: ${theme.colors.greyBlue};
      margin-left: ${theme.spacing.sm};
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
