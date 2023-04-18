import React from "react";
import styled from "styled-components";

export default function BasketFooter() {
  return <BasketFooterStyled>FOOTER</BasketFooterStyled>;
}

const BasketFooterStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: green;
`;
