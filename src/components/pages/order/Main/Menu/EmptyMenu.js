import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import EmptyMessageAdmin from "./EmptyMessageAdmin";
import EmptyMessageCustomer from "./EmptyMessageCustomer";

export default function EmptyMenu({ isAdmin, reloadMenu }) {
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

  font-family: ${theme.font.families.stylish};
  color: ${theme.colors.greyBlue};

  h1 {
    font-size: ${theme.font.sizes.P4};
    font-weight: ${theme.font.weights.bold};
    margin-top: 0px;
    margin-bottom: 31px;
  }

  h2 {
    font-size: ${theme.font.sizes.P4};
    font-weight: ${theme.font.weights.regular};
    margin-top: 0px;
    margin-bottom: 31px;
  }

  h3 {
    font-size: ${theme.font.sizes.P4};
    font-weight: ${theme.font.weights.regular};
    margin-top: 0px;
    margin-bottom: 0px;
  }
`;
