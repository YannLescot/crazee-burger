import React from "react";
import styled from "styled-components";
import { theme } from "../../theme/index.js";

export default function TextInput({ value, onChange, Icon, ...extraProps }) {
  return (
    <TextInputStyled>
      {Icon && Icon}
      <input value={value} onChange={onChange} type="text" {...extraProps} />
    </TextInputStyled>
  );
}

const TextInputStyled = styled.div`
  gap: ${theme.spacing.xs};
  display: flex;
  align-items: center;
  background-color: ${theme.colors.white};
  width: 400px;
  height: 54px;
  border: none;
  border-radius: ${theme.borderRadius.round};

  input {
    width: 70%;
    font-size: ${theme.fonts.size.P0};
    font-weight: ${theme.fonts.weight.regular};
    border-radius: ${theme.borderRadius.round};
    border: none;

    &::placeholder {
      font-size: ${theme.fonts.size.P0};
      background: ${theme.colors.white};
      color: ${theme.colors.greyLight};
    }
  }

  .icon {
    color: ${theme.colors.greyBlue};
    margin-left: ${theme.spacing.md};
    font-size: ${theme.fonts.size.P0};
    padding: 0px 10px;
  }
`;
