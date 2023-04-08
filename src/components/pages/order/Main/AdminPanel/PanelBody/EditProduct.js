import React, { useContext } from "react";
import styled from "styled-components";
import ProductForm from "./ProductForm";
import OrderContext from "../../../../../../context/OrderContext";
import ImagePreview from "./ImagePreview";
import { theme } from "../../../../../../theme";
import { HiCursorClick } from "react-icons/hi";

export default function EditProduct() {
  const { menu, setMenu, productToEdit, setProductToEdit } =
    useContext(OrderContext);

  return (
    <EditProductStyled>
      {productToEdit.id !== "" ? (
        <div className="hasItem">
          <ImagePreview imageSource={productToEdit.imageSource} />
          <ProductForm tab="edit" />
        </div>
      ) : (
        <div className="isEmpty">
          <p>
            Cliquer sur un produit du menu pour le modifier{" "}
            <HiCursorClick className="icon" />
          </p>
        </div>
      )}
    </EditProductStyled>
  );
}

const EditProductStyled = styled.div`
  width: 100%;

  .hasItem {
    display: grid;
    grid-column-gap: 20px;
    grid-template-columns: 1fr 3fr 2fr;
  }

  .isEmpty {
    display: grid;
    grid-column-gap: 20px;
    grid-template-columns: 4fr 2fr;
    p {
      font-family: "amatic sc", cursive;
      font-size: ${theme.fonts.size.P3};
      color: ${theme.colors.greyBlue};
      display: flex;
      align-items: center;
      padding: 0px;
      .icon {
        margin-left: 10px;
      }
    }
  }
`;
