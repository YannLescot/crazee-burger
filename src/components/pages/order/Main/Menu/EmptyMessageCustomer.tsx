import React from "react";
import styled from "styled-components";
import { EMPTY_MENU_MESSAGES } from "../../../../../ts/enum";

export default function EmptyMessageCustomer() {
  return (
    <EmptyMessageCustomerStyled>
      <h1>{EMPTY_MENU_MESSAGES.CUSTOMER.TITLE}</h1>

      <h2>{EMPTY_MENU_MESSAGES.CUSTOMER.SUBTITLE}</h2>

      <h3>{EMPTY_MENU_MESSAGES.CUSTOMER.SUBTITLE2}</h3>
    </EmptyMessageCustomerStyled>
  );
}

const EmptyMessageCustomerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
