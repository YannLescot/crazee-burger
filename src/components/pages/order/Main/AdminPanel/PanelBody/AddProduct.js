import React, { useContext, useState } from "react";
import styled from "styled-components";
import ProductForm from "./ProductForm";
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
        price: productToAdd.price,
      },
      ...menu,
    ]);
    displaySuccessMessage();
    setProductToAdd(EMPTY_PRODUCT);
  };

  return (
    <AddProductStyled>
      <ImagePreview imageSource={productToAdd.imageSource} />
      <ProductForm
        onSubmit={handleSubmit}
        wasProductAdded={wasProductAdded}
        product={productToAdd}
      />
    </AddProductStyled>
  );
}

const AddProductStyled = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr 2fr;
  grid-column-gap: 20px;
`;
