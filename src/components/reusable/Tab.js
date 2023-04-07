import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

export default function Tab({ Icon, label, onClick, className }) {
  return (
    <TabStyled onClick={onClick} className={className}>
      {Icon && Icon}
      {label}
    </TabStyled>
  );
}

const TabStyled = styled.button`
  background-color: ${theme.colors.white};
  padding: 0px 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  border-style: solid;
  border-color: ${theme.colors.greyLight};
  border-width: 1px 1px 2px 1px;
  font-size: ${theme.fonts.size.P0};
  color: ${theme.colors.greySemiDark};
  border-top-left-radius: ${theme.borderRadius.round};
  border-top-right-radius: ${theme.borderRadius.round};
  box-shadow: ${theme.shadows.subtle};
  height: 100%;

  position: relative;
  top: 1px;

  &.active {
    background-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    border: 1px solid ${theme.colors.background_dark};
  }

  &:hover {
    cursor: pointer;
    text-decoration: underline;
    border-bottom: 2px solid ${theme.colors.white};
    &.active {
      border: 1px solid ${theme.colors.background_dark};
    }
  }
`;
