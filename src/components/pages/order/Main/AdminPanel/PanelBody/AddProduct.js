import React, { useContext, useState } from "react";
import styled from "styled-components";
import ProductForm from "./ProductForm";
import OrderContext from "../../../../../../context/OrderContext";
import { EMPTY_PRODUCT } from "../../../../../../js/enum";
import AddFooter from "./AddFooter";

export default function AddProduct() {
  const { menu, setMenu, productToAdd, setProductToAdd } =
    useContext(OrderContext);

  const [wasProductAdded, setWasProductAdded] = useState(false);

  const displaySuccessMessage = () => {
    setWasProductAdded(!wasProductAdded);
    setTimeout(() => {
      setWasProductAdded(false);
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMenu([
      {
        ...productToAdd,
        id: crypto.randomUUID(),
      },
      ...menu,
    ]);
    displaySuccessMessage();
    setProductToAdd(EMPTY_PRODUCT);
  };

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setProductToAdd({ ...productToAdd, [name]: value });
  };

  return (
    <AddProductStyled onSubmit={handleSubmit}>
      <ProductForm
        imageSource={productToAdd.imageSource}
        wasProductAdded={wasProductAdded}
        product={productToAdd}
        handleChange={handleFieldChange}
        handleSubmit={handleSubmit}
        UnderFields={<AddFooter wasProductAdded={wasProductAdded} />}
      />
    </AddProductStyled>
  );
}

const AddProductStyled = styled.div`
  height: 100%;
  width: 70%;
  display: grid;
`;
