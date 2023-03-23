import React from "react";
import styled from "styled-components";
import UserPanel from "./UserPanel";

export default function RightSide() {
  return (
    <RightSideStyled>
      <UserPanel />
    </RightSideStyled>
  );
}

const RightSideStyled = styled.div``;
