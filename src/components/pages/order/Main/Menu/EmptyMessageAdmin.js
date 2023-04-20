import React from "react";
import styled from "styled-components";
import Button from "../../../../reusable/Button";

export default function EmptyMessageAdmin({ reloadMenu }) {
  return (
    <EmptyMessageAdminStyled>
      <h1>Le menu est vide ?</h1>

      <h2>Cliquez ci-dessous pour le réinitialiser</h2>
      <Button
        label="Générer de nouveaux produits"
        variant="primary"
        size="medium"
        padding="large"
        onClick={reloadMenu}
      />
    </EmptyMessageAdminStyled>
  );
}

const EmptyMessageAdminStyled = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
