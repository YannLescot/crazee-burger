import React, { useContext, useState } from "react";
import styled from "styled-components";
import AddForm from "./AddForm";
import OrderContext from "../../../../../../context/OrderContext";
import ImagePreview from "./ImagePreview";

const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: "",
};

export default function AddProduct() {
  const { menu, setMenu, productToAdd, setProductToAdd } =
    useContext(OrderContext);
  const [wasProductAdded, setWasProductAdded] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMenu([
      {
        ...productToAdd,
        id: crypto.randomUUID(),
        price: productToAdd.price,
      },
      ...menu,
    ]);
    setWasProductAdded(!wasProductAdded);
    setTimeout(() => {
      setWasProductAdded(false);
    }, 2000);
    setProductToAdd(EMPTY_PRODUCT);
  };

  return (
    <AddProductStyled>
      <ImagePreview imageSource={productToAdd.imageSource} />
      <AddForm onSubmit={handleSubmit} wasProductAdded={wasProductAdded} />
    </AddProductStyled>
  );
}

const AddProductStyled = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr 2fr;
  grid-column-gap: 20px;
`;
