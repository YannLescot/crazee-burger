import React from "react";
import styled from "styled-components";
import Button from "../../../../reusable/Button";
import { EMPTY_MENU_MESSAGES } from "../../../../../ts/enum";

interface EmptyMessageAdminProps {
  reloadMenu: () => void;
}

export default function EmptyMessageAdmin({
  reloadMenu,
}: EmptyMessageAdminProps) {
  return (
    <EmptyMessageAdminStyled>
      <h1>{EMPTY_MENU_MESSAGES.ADMIN.TITLE}</h1>

      <h2>{EMPTY_MENU_MESSAGES.ADMIN.SUBTITLE}</h2>
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
