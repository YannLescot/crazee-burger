import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import Button from "../../../reusable/Button";

export default function EmptyMenu({ isAdmin, reloadMenu }) {
  return (
    <EmptyMenuStyled onSubmit={reloadMenu}>
      <h1>{isAdmin ? "Le menu est vide ?" : "Victime de notre succès ! :D"}</h1>
      <h2>
        {isAdmin
          ? "Cliquez ci-dessous pour le réinitialiser"
          : "De nouvelles recettes sont encours de préparation."}
      </h2>
      {!isAdmin && <h3>À très vite !</h3>}
      {isAdmin && (
        <div className="reload">
          <Button label="Générer de nouveaux produits" variant="login" />
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
