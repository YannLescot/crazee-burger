import React from "react";
import styled from "styled-components";
<<<<<<<< HEAD:src/components/pages/order/Main/EmptyMenuCustomer.js
import { theme } from "../../../../theme";
========
import { theme } from "../../../../../theme";
import Button from "../../../../reusable/Button";
import EmptyMessageAdmin from "./EmptyMessageAdmin";
import EmptyMessageCustomer from "./EmptyMessageCustomer";

export default function EmptyMenu({ isAdmin, reloadMenu }) {
  return (
    <EmptyMenuStyled onSubmit={reloadMenu}>
      {isAdmin ? <EmptyMessageAdmin /> : <EmptyMessageCustomer />}
    </EmptyMenuStyled>
  );
}

const EmptyMenuCustomerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: ${theme.font.families.stylish};
    font-size: ${theme.font.sizes.P4};
    font-weight: ${theme.font.weights.bold};
    color: ${theme.colors.greyBlue};
    margin-bottom: 31px;
    margin-top: 0px;
  }

  h2 {
    font-family: ${theme.font.families.stylish};
    font-size: ${theme.font.sizes.P4};
    font-weight: ${theme.font.weights.regular};
    color: ${theme.colors.greyBlue};
    margin-top: 0px;
    margin-bottom: 31px;
  }

  h3 {
    font-family: ${theme.font.families.stylish};
    font-size: ${theme.font.sizes.P4};
    font-weight: ${theme.font.weights.regular};
    color: ${theme.colors.greyBlue};
    margin-top: 0px;
    margin-bottom: 0px;
  }
`;
