import React, { useContext } from "react";
import styled from "styled-components";
import AddFooter from "./AddFooter";
import OrderContext from "../../../../../../../context/OrderContext";
import ProductForm from "../ProductForm";
import { EMPTY_PRODUCT } from "../../../../../../../js/enum";
import { useDisplaySuccessMessage } from "../../../../../../../hooks/useDisplaySuccessMessage";

export default function AddProduct() {
  const { productToAdd, handleProductAdd, setProductToAdd } =
    useContext(OrderContext);

  const { wasProductAdded, displaySuccessMessage } = useDisplaySuccessMessage();

  const onSubmit = (e) => {
    e.preventDefault();
    handleProductAdd({ ...productToAdd, id: crypto.randomUUID() });
    displaySuccessMessage();
    setProductToAdd(EMPTY_PRODUCT);
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
  width: 80%;
  display: grid;
`;
