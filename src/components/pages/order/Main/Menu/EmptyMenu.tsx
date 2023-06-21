import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import EmptyMessageAdmin from "./EmptyMessageAdmin";
import EmptyMessageCustomer from "./EmptyMessageCustomer";

interface EmptyMenuProps {
  isAdmin: boolean;
  reloadMenu: () => void;
}

export default function EmptyMenu({ isAdmin, reloadMenu }: EmptyMenuProps) {
  return (
    <EmptyMenuStyled>
      {isAdmin ? (
        <EmptyMessageAdmin reloadMenu={reloadMenu} />
      ) : (
        <EmptyMessageCustomer />
      )}
    </EmptyMenuStyled>
  );
}

const EmptyMenuStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-shadow: ${theme.shadows.strong};

  h1,
  h2,
  h3 {
    font-family: ${theme.font.families.stylish};
    color: ${theme.colors.greyBlue};
    font-size: ${theme.font.sizes.P4};
    font-weight: ${theme.font.weights.regular};
    margin-top: 0px;
    margin-bottom: 31px;
  }

  h1 {
    font-weight: ${theme.font.weights.bold};
  }

  h3 {
    margin-bottom: 0px;
  }
`;
