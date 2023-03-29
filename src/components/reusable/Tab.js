import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

export default function Tab({ id, icon, label, onClick, isActive }) {
  return (
    <TabStyled id={id} onClick={onClick} className={isActive ? "active" : ""}>
      {icon && icon}
      {label}
    </TabStyled>
  );
}

const TabStyled = styled.button`
  background-color: ${theme.colors.white};
  padding: 0px 22px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
  border: 1px solid ${theme.colors.greyLight};
  font-size: 16px;
  color: ${theme.colors.greyBlue};
  border-top-left-radius: ${theme.borderRadius.round};
  border-top-right-radius: ${theme.borderRadius.round};
  height: 100%;

  &.active {
    background-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    border: 1px solid ${theme.colors.background_dark};
  }

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
