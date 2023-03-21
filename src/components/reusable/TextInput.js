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
  padding: 2px 0px;
  display: flex;
  align-items: center;
  background-color: ${theme.colors.white};
  width: 400px;
  height: 50px;
  border: none;
  border-radius: ${theme.borderRadius.round};
  input {
    width: 70%;
    font-size: ${theme.fonts.size.P1};
    font-weight: ${theme.fonts.weight.medium};
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
