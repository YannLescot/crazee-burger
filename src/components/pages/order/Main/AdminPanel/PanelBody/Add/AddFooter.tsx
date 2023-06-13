import React from "react";
import { FiCheck } from "react-icons/fi";
import styled from "styled-components";
import { theme } from "../../../../../../../theme";
import Button from "../../../../../../reusable/Button";
import UpdateMessage from "../../../../../../reusable/UpdateMessage";

interface AddFooterProps {
  wasProductAdded: boolean;
}

export default function AddFooter({ wasProductAdded }: AddFooterProps) {
  return (
    <AddFooterStyled>
      <Button
        className="submit-button"
        label={"Ajouter un nouveau produit au menu"}
        variant="add"
        size="large"
        onClick={() => {}}
      />
      <UpdateMessage
        label="Ajouté avec succès !"
        Icon={<FiCheck className="icon" />}
        color={theme.colors.success}
        isDisplayed={wasProductAdded}
      />
    </AddFooterStyled>
  );
}

const AddFooterStyled = styled.div`
  grid-area: 4 / 2 / -1 / -1;
  display: flex;
  align-items: center;
  position: relative;
  top: 3px;
  grid-row: 2;

  .submit-button {
    height: 100%;
  }

  .icon {
    border: 1px solid ${theme.colors.success};
    border-radius: ${theme.borderRadius.circle};
  }
`;
