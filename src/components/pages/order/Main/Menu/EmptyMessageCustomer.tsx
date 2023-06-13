import React from "react";
import styled from "styled-components";

export default function EmptyMessageCustomer() {
  return (
    <EmptyMessageCustomerStyled>
      <h1>Victime de notre succès ! :D</h1>

      <h2>De nouvelles recettes sont encours de préparation.</h2>

      <h3>À très vite !</h3>
    </EmptyMessageCustomerStyled>
  );
}

const EmptyMessageCustomerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
