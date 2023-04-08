import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import Button from "../../../reusable/Button";

export default function EmptyMenu({ message, reloadMenu }) {
  return (
    <EmptyMenuStyled onSubmit={reloadMenu}>
      <h1>{message.title}</h1>

      <h2>{message.subtitle}</h2>

      {message.showh3 && <h3>À très vite !</h3>}

      {message.showReload && (
        <div className="reload">
          <Button label="Générer de nouveaux produits" variant="large" />
        </div>
      )}
    </EmptyMenuStyled>
  );
}

const EmptyMenuStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: "Amatic SC", cursive;
    font-size: ${theme.fonts.size.P4};
    font-weight: ${theme.fonts.weight.bold};
    color: ${theme.colors.greyBlue};
    margin-bottom: 31px;
    margin-top: 0px;
  }

  h2 {
    font-family: "Amatic SC", cursive;
    font-size: ${theme.fonts.size.P4};
    font-weight: ${theme.fonts.weight.regular};
    color: ${theme.colors.greyBlue};
    margin-top: 0px;
    margin-bottom: 31px;
  }

  h3 {
    font-family: "Amatic SC", cursive;
    font-size: ${theme.fonts.size.P4};
    font-weight: ${theme.fonts.weight.regular};
    color: ${theme.colors.greyBlue};
    margin-top: 0px;
    margin-bottom: 0px;
  }

  .reload {
    width: 235px;
    height: 50px;
    font-size: ${theme.fonts.size.XS};
  }
`;
