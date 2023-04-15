import React, { useContext } from "react";
import styled from "styled-components";
import ProductForm from "./ProductForm";
import OrderContext from "../../../../../../context/OrderContext";
import AddFooter from "./AddFooter";

export default function AddProduct() {
  const {
    productToAdd,
    handleProductAddition,
    wasProductAdded,
    handleAddFieldChange,
  } = useContext(OrderContext);

  const onSubmit = (e) => {
    e.preventDefault();
    handleProductAddition();
  };

  return (
    <AddProductStyled onSubmit={onSubmit}>
      <ProductForm
        product={productToAdd}
        handleChange={handleAddFieldChange}
        handleSubmit={onSubmit}
      >
        <AddFooter wasProductAdded={wasProductAdded} />
      </ProductForm>
    </AddProductStyled>
  );
}

const AddProductStyled = styled.div`
  height: 100%;
  width: 70%;
  display: grid;
`;
