import React from "react";
import styled from "styled-components";

export default function BasketBody() {
  return <BasketBodyStyled>BODY</BasketBodyStyled>;
}

const BasketBodyStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: blue;
`;
