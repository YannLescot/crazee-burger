import React from "react";
import { FiCheck } from "react-icons/fi";
import styled from "styled-components";
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
        <span className="succesAdd">
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
`;
