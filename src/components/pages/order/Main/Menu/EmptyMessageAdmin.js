import React from "react";
import styled from "styled-components";
import Button from "../../../../reusable/Button";

export default function EmptyMessageAdmin() {
  return (
    <EmptyMessageAdminStyled>
      <h1>Le menu est vide ?</h1>

      <h2>Cliquez ci-dessous pour le réinitialiser</h2>
      <Button
        label="Générer de nouveaux produits"
        variant="primary"
        sizing="medium"
        padding="large"
      />
    </EmptyMessageAdminStyled>
  );
}

const EmptyMessageAdminStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
