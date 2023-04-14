import React from "react";
import styled from "styled-components";
<<<<<<<< HEAD:src/components/pages/order/Main/EmptyMenuCustomer.js
import { theme } from "../../../../theme";
========
import { theme } from "../../../../../theme";
import Button from "../../../../reusable/Button";
>>>>>>>> 2780ebd (♻️ F09: Create Menu folder):src/components/pages/order/Main/Menu/EmptyMenu.js

export default function EmptyMenuCustomer() {
  return (
    <EmptyMenuCustomerStyled>
      <h1>Victime de notre succès ! :D</h1>

      <h2>De nouvelles recettes sont encours de préparation.</h2>

      <h3>À très vite !</h3>
    </EmptyMenuCustomerStyled>
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
