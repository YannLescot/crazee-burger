import React, { useContext, useState } from "react";
import styled from "styled-components";
import { theme } from "../../../../../../theme";
import AddForm from "./AddForm";
import AddProductContext from "../../../../../../context/AddProductContext";
import OrderContext from "../../../../../../context/OrderContext";

const emptyProduct = {
  id: crypto.randomUUID(),
  title: "",
  imageSource: "",
  price: 0,
};

export default function AddProduct() {
  const { menu, setMenu } = useContext(OrderContext);

  const [productToAdd, setProductToAdd] = useState({
    emptyProduct,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setMenu([...menu, productToAdd]);
    console.log(productToAdd.imageSource);

    setProductToAdd(emptyProduct);
  };

  const addProductContextValue = {
    productToAdd,
    setProductToAdd,
  };

  return (
    <AddProductStyled onSubmit={(e) => handleSubmit(e)}>
      <AddProductContext.Provider value={addProductContextValue}>
        <div className={!productToAdd.imageSource ? "noImg" : "hasImg"}>
          {!productToAdd.imageSource ? (
            <p>Aucune image</p>
          ) : (
            <img src={productToAdd.imageSource} alt="Produit" />
          )}
        </div>
        <AddForm />
      </AddProductContext.Provider>
    </AddProductStyled>
  );
}

const AddProductStyled = styled.div`
  width: 50%;
  display: grid;
  grid-template-columns: 1fr 3fr 2fr;
  grid-column-gap: 20px;
  .noImg {
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: ${theme.borderRadius.round};
    width: 215px;
    height: 120px;
    font-size: ${theme.fonts.size.P0};
    font-weight: ${theme.fonts.weight.regular};
    color: ${theme.colors.greySemiDark};
    border: 1px solid ${theme.colors.greyLight};
  }

  .hasImg {
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: ${theme.borderRadius.round};
    width: 215px;
    height: 120px;
    font-size: ${theme.fonts.size.P0};
    font-weight: ${theme.fonts.weight.regular};
    color: ${theme.colors.greySemiDark};
    border: 1px solid ${theme.colors.white};

    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }
`;
