import React, { useContext } from "react";
import styled from "styled-components";
import AddFooter from "./AddFooter";
import OrderContext from "../../../../../../../context/OrderContext";
import ProductForm from "../ProductForm";

export default function AddProduct() {
  const { productToAdd, handleProductAdd, wasProductAdded, setProductToAdd } =
    useContext(OrderContext);

  const onSubmit = (e) => {
    e.preventDefault();
    handleProductAdd();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    const newProductToAdd = { ...productToAdd, [name]: value };
    setProductToAdd(newProductToAdd);
  };

  return (
    <AddProductStyled onSubmit={onSubmit}>
      <ProductForm
        product={productToAdd}
        handleChange={handleChange}
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
