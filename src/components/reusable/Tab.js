import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

export default function Tab({ icon, label, onClick, isActive }) {
  return (
    <TabStyled>
      <button onClick={onClick} className={isActive ? "active" : ""}>
        {icon && icon}
        {label}
      </button>
    </TabStyled>
  );
}

const TabStyled = styled.div`
  background-color: ${theme.colors.white};
  padding: 0px 22px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
  border: 1px solid ${theme.colors.greyLight};
  color: ${theme.colors.greyBlue};
  font-size: 16px;
  border-top-left-radius: ${theme.borderRadius.round};
  border-top-right-radius: ${theme.borderRadius.round};
  height: 100%;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
