import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import Button from "../../../reusable/Button";

export default function EmptyMenuAdmin({ reloadMenu }) {
  return (
    <EmptyMenuAdminStyled onSubmit={reloadMenu}>
      <h1>Le menu est vide ?</h1>

      <h2>Cliquez ci-dessous pour le réinitialiser</h2>

      <div className="reload">
        <Button label="Générer de nouveaux produits" variant="large" />
      </div>
    </EmptyMenuAdminStyled>
  );
}

const EmptyMenuAdminStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: "Amatic SC", cursive;
    font-size: ${theme.font.sizes.P4};
    font-weight: ${theme.font.weights.bold};
    color: ${theme.colors.greyBlue};
    margin-bottom: 31px;
    margin-top: 0px;
  }

  h2 {
    font-family: "Amatic SC", cursive;
    font-size: ${theme.font.sizes.P4};
    font-weight: ${theme.font.weights.regular};
    color: ${theme.colors.greyBlue};
    margin-top: 0px;
    margin-bottom: 31px;
  }

  .reload {
    width: 235px;
    height: 50px;
    font-size: ${theme.font.sizes.XS};
  }
`;
