import React, { useContext, useState } from "react";
import styled from "styled-components";
import { theme } from "../../../../../../theme";
import AddForm from "./AddForm";
import AddProductContext from "../../../../../../context/AddProductContext";
import OrderContext from "../../../../../../context/OrderContext";
import { formatPrice } from "../../../../../../utils/maths";

const emptyProduct = {
  id: "",
  title: "",
  imageSource: "",
  price: "",
};

export default function AddProduct() {
  const { menu, setMenu } = useContext(OrderContext);
  const [productWasAdded, setProductWasAdded] = useState(false);

  const [productToAdd, setProductToAdd] = useState(emptyProduct);

  const handleSubmit = (e, productWasAdded) => {
    e.preventDefault();
    setMenu([
      ...menu,
      {
        ...productToAdd,
        id: crypto.randomUUID(),
        price: formatPrice(productToAdd.price),
      },
    ]);
    setProductWasAdded(!productWasAdded);
    setTimeout(() => {
      setProductWasAdded(false);
    }, 2000);
    setProductToAdd(emptyProduct);
  };

  const addProductContextValue = {
    productToAdd,
    setProductToAdd,
  };

  return (
    <AddProductStyled
      onSubmit={(e) => handleSubmit(e, productWasAdded)}
      productAdded={productWasAdded}
    >
      <AddProductContext.Provider value={addProductContextValue}>
        <div className={!productToAdd.imageSource ? "noImg" : "hasImg"}>
          {!productToAdd.imageSource ? (
            <p>Aucune image</p>
          ) : (
            <img src={productToAdd.imageSource} alt="Produit" />
          )}
        </div>
        <AddForm onSubmit={handleSubmit} productAdded={productWasAdded} />
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
