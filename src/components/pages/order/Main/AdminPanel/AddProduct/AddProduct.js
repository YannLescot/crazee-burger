import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../../theme";
import AddForm from "./AddForm";

export default function AddProduct() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("submit");
  };

  return (
    <AddProductStyled onSubmit={(e) => handleSubmit(e)}>
      <div className="imageProduct">Aucune image</div> <AddForm />
    </AddProductStyled>
  );
}

const AddProductStyled = styled.div`
  width: 50%;
  display: grid;
  grid-template-columns: 1fr 3fr 2fr;
  grid-column-gap: 20px;
  .imageProduct {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${theme.colors.greyLight};
    border-radius: ${theme.borderRadius.round};
    width: 215px;
    height: 120px;
    font-size: ${theme.fonts.size.P0};
    font-weight: ${theme.fonts.weight.regular};
    color: ${theme.colors.greySemiDark};
  }
`;
