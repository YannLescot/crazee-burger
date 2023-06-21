import React, { useContext } from "react";
import styled from "styled-components";
import AddFooter from "./AddFooter";
import OrderContext from "../../../../../../../context/OrderContext";
import ProductForm from "../ProductForm";
import { EMPTY_PRODUCT } from "../../../../../../../ts/enum";
import { useDisplaySuccessMessages } from "../../../../../../../hooks/useDisplaySuccessMessages";

export default function AddProduct() {
  const { productToAdd, handleProductAdd, setProductToAdd } =
    useContext(OrderContext);

  const { wasProductAdded, displaySuccessAddMessage } =
    useDisplaySuccessMessages();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleProductAdd({ ...productToAdd, id: crypto.randomUUID() });
    displaySuccessAddMessage();
    setProductToAdd(EMPTY_PRODUCT);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    const newProductToAdd = { ...productToAdd, [name]: value };
    setProductToAdd(newProductToAdd);
  };

  return (
    <AddProductStyled>
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
  width: 100%;
  display: grid;
`;
