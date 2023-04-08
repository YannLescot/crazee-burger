import React, { useContext, useState } from "react";
import styled from "styled-components";
import AddForm from "./AddForm";
import AddProductContext from "../../../../../../context/AddProductContext";
import OrderContext from "../../../../../../context/OrderContext";
import { formatPrice } from "../../../../../../utils/maths";
import ImagePreview from "./ImagePreview";

const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: "",
};

export default function AddProduct() {
  const { menu, setMenu } = useContext(OrderContext);
  const [wasProductAdded, setWasProductAdded] = useState(false);

  const [productToAdd, setProductToAdd] = useState(EMPTY_PRODUCT);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMenu([
      {
        ...productToAdd,
        id: crypto.randomUUID(),
        price: formatPrice(productToAdd.price),
      },
      ...menu,
    ]);
    setWasProductAdded(!wasProductAdded);
    setTimeout(() => {
      setWasProductAdded(false);
    }, 2000);
    setProductToAdd(EMPTY_PRODUCT);
  };

  const addProductContextValue = {
    productToAdd,
    setProductToAdd,
  };

  return (
    <AddProductStyled>
      <AddProductContext.Provider value={addProductContextValue}>
        <ImagePreview imageSource={productToAdd.imageSource} />
        <AddForm onSubmit={handleSubmit} wasProductAdded={wasProductAdded} />
      </AddProductContext.Provider>
    </AddProductStyled>
  );
}

const AddProductStyled = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr 2fr;
  grid-column-gap: 20px;
`;
