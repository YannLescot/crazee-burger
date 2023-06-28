import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme";
import { WELCOME_MESSAGES } from "../../../ts/enum";

const Welcome = () => {
  return (
    <WelcomeStyled>
      <h1>{WELCOME_MESSAGES.TITLE}</h1>
      <hr />
      <h2>{WELCOME_MESSAGES.LOGIN}</h2>
    </WelcomeStyled>
  );
};

export default Welcome;

const WelcomeStyled = styled.div`
  display: flex;
  max-width: 500px;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.md};
  border-radius: ${theme.borderRadius.round};
  margin-bottom: ${theme.spacing.md};

  h1 {
    margin: 0px;
    font-family: ${theme.font.families.stylish};
    font-size: ${theme.font.sizes.P5};
    font-weight: ${theme.font.weights.regular};
    color: ${theme.colors.white};
  }

  hr {
    border: none;
    flex-shrink: 0;
    min-width: 400px;
    height: 2px;
    background-color: ${theme.colors.primary};
  }

  h2 {
    font-family: ${theme.font.families.stylish};
    font-size: ${theme.font.sizes.P4};
    font-weight: ${theme.font.weights.regular};
    color: ${theme.colors.white};
    margin-top: 8px;
    margin-bottom: 0px;
  }
`;
