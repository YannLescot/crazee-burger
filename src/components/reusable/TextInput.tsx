import React, { LegacyRef } from "react";
import styled, { css } from "styled-components";
import { theme } from "../../theme/index.js";

interface TextInputProps {
  type?: string;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  name?: string;
  placeholder?: string;
  Icon?: React.ReactNode;
  variant: "normal" | "minimalist" | "large";
  onBlur?: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  className?: string;
  rows?: number;
  required?: boolean;
}

type refType = LegacyRef<HTMLInputElement & HTMLTextAreaElement>;

const TextInput = React.forwardRef(
  (
    {
      type,
      value,
      onChange,
      name,
      placeholder,
      Icon,
      variant,
      onBlur,
      className,
      rows,
    }: TextInputProps,
    ref: refType
  ) => {
    return (
      <TextInputStyled variant={variant} className={className}>
        <div className="icon">{Icon && Icon}</div>
        {type === "textarea" ? (
          <textarea
            ref={ref}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            onBlur={onBlur}
            rows={rows}
          />
        ) : (
          <input
            ref={ref}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
            onBlur={onBlur}
          />
        )}
      </TextInputStyled>
    );
  }
);

export default TextInput;

const TextInputStyled = styled.div<TextInputProps>`
  display: flex;
  align-items: center;
  width: 100%;
  border: none;
  border-radius: ${theme.borderRadius.round};

  input,
  textarea {
    width: 70%;
    font-size: ${theme.font.sizes.SM};
    font-weight: ${theme.font.weights.regular};
    border-radius: ${theme.borderRadius.round};
    border: none;

    &::placeholder {
      font-size: ${theme.font.sizes.SM};
    }
  }

  textarea {
    width: 75%;
    margin-left: ${theme.spacing.xs};
    font-weight: 100;
    background-color: ${theme.colors.background_white};
    color: ${theme.colors.dark};
    resize: none;
    font-family: "Arial", sans-serif;

    &::placeholder {
      color: ${theme.colors.greyMedium};
      font-weight: ${theme.font.weights.light};
    }
  }

  .icon {
    font-size: ${theme.font.sizes.SM};
  }

  ${({ variant }) => variant === "minimalist" && getMinimalistStyle()}
  ${({ variant }) => variant === "normal" && getNormalStyle()}
  ${({ variant }) => variant === "large" && getLargeStyle()}
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

    @media ${theme.devices.mobile} {
      height: 45px;
      width: 225px;
      padding: 2px 10px;

      .icon {
        margin-left: ${theme.spacing.xs};
      }
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

const getLargeStyle = () => {
  return css`
    max-width: 400px;
    height: 100%;
    background-color: ${theme.colors.background_white};

    input {
      width: 90%;
      height: 90%;
      background-color: ${theme.colors.background_white};
      background-color: red;
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
