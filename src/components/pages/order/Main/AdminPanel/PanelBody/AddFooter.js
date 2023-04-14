import React from "react";
import { FiCheck } from "react-icons/fi";
import styled from "styled-components";
import { theme } from "../../../../../../theme";
import Button from "../../../../../reusable/Button";

export default function AddFooter({ wasProductAdded }) {
  return (
    <AddFooterStyled>
      <Button
        className="submit-button"
        label={"Ajouter un nouveau produit au menu"}
        variant="add"
      />
      {wasProductAdded && (
        <span>
          <FiCheck className="icon" /> Ajouté avec succès !
        </span>
      )}
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

  span {
    display: flex;
    align-items: center;
    font-size: ${theme.font.sizes.SM};
    margin: 8px 18px;
    color: ${theme.colors.success};
    .icon {
      border: 1px solid ${theme.colors.success};
      border-radius: ${theme.borderRadius.circle};
      margin-right: 8px;
    }
  }
`;
