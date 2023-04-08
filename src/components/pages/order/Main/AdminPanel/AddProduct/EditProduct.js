import React, { useContext, useState } from "react";
import styled from "styled-components";
import ProductForm from "./ProductForm";
import OrderContext from "../../../../../../context/OrderContext";
import ImagePreview from "./ImagePreview";

export default function EditProduct() {
  const { menu, setMenu, productToEdit, setProductToEdit } =
    useContext(OrderContext);

  return (
    <EditProductStyled>
      <ImagePreview imageSource={productToEdit.imageSource} />
      <ProductForm tab="edit" />
    </EditProductStyled>
  );
}

const EditProductStyled = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr 2fr;
  grid-column-gap: 20px;
`;
