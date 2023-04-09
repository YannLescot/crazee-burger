import React, { useContext } from "react";
import styled from "styled-components";
import ProductForm from "./ProductForm";
import OrderContext from "../../../../../../context/OrderContext";
import ImagePreview from "./ImagePreview";
import { theme } from "../../../../../../theme";
import { HiCursorClick } from "react-icons/hi";

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
          <ImagePreview imageSource={productToEdit.imageSource} />
          <ProductForm
            product={productToEdit}
            handleChange={handleFieldChange}
            neededRef={titleEditBoxRef}
          />
          <div className="editSection">
            Cliquer sur un produit du menu pour le modifier <p>en temps réel</p>
          </div>
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
  height: 100%;
  width: 70%;

  .hasItem {
    display: grid;
    grid-column-gap: 20px;
    grid-row-gap: 10px;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: repeat(1fr, 1fr);

    .editSection {
      display: flex;
      align-items: center;
      color: ${theme.colors.primary};
      font-size: ${theme.fonts.size.SM};
      grid-column: 2;

      p {
        text-decoration: underline;
        padding: 0px 5px;
        margin: 0px;
      }
    }
  }

  .isEmpty {
    display: grid;
    margin-top: 30px;
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
