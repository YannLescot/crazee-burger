import React, { useContext } from "react";
import styled from "styled-components";
import ProductForm from "./ProductForm";
import OrderContext from "../../../../../../context/OrderContext";
import { theme } from "../../../../../../theme";
import { HiCursorClick } from "react-icons/hi";
import NoProductToEdit from "./NoProductToEdit";

export default function EditProduct() {
  const { productToEdit, setProductToEdit, menu, setMenu, titleEditBoxRef } =
    useContext(OrderContext);

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setProductToEdit({ ...productToEdit, [name]: value });

    const newMenu = menu.map((product) =>
      product.id === productToEdit.id ? { ...product, [name]: value } : product
    );
    setMenu(newMenu);
  };

  return (
    <EditProductStyled>
      {productToEdit ? (
        <div className="hasItem">
          <ProductForm
            imageSource={productToEdit.imageSource}
            product={productToEdit}
            handleChange={handleFieldChange}
            titleRef={titleEditBoxRef}
          />
          <div className="editSection">
            Cliquer sur un produit du menu pour le modifier <p>en temps réel</p>
          </div>
        </div>
      ) : (
        <NoProductToEdit />
      )}
    </EditProductStyled>
  );
}

const EditProductStyled = styled.div`
  height: 100%;
  width: 70%;

  .hasItem {
    display: grid;
    grid-column-gap: 20px;
    grid-row-gap: 10px;
    grid-template-rows: repeat(1fr, 1fr);

    .editSection {
      display: flex;
      align-items: center;
      color: ${theme.colors.primary};
      font-size: ${theme.fonts.size.SM};
      grid-row: 2;
      margin-left: 220px;

      p {
        text-decoration: underline;
        padding: 0px 5px;
        margin: 0px;
      }
    }
  }
`;
