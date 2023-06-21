import React from "react";
import styled from "styled-components";
import Button from "../../../../reusable/Button";

interface EmptyMessageAdminProps {
  reloadMenu: () => void;
}

export default function EmptyMessageAdmin({
  reloadMenu,
}: EmptyMessageAdminProps) {
  return (
    <EmptyMessageAdminStyled>
      <h1>Le menu est vide ?</h1>

      <h2>Cliquez ci-dessous pour le réinitialiser</h2>
      <Button
        label="Générer de nouveaux produits"
        variant="primary"
        size="medium"
        onClick={reloadMenu}
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
