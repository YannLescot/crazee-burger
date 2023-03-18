import React from "react";
import styled from "styled-components";
import CrazeeTxtLogo from "../../reusable/CrazeeTxtLogo";

export default function LoginWelcome() {
  return (
    <LoginWelcomeStyled>
      <CrazeeTxtLogo />
      <div>LoginWelcome</div>
    </LoginWelcomeStyled>
  );
}

const LoginWelcomeStyled = styled.div``;
