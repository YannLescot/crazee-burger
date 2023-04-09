import React, { useContext } from "react";
import styled from "styled-components";
import ProductForm from "./ProductForm";
import OrderContext from "../../../../../../context/OrderContext";
import CtaEdit from "./CtaEdit";
import EditFooter from "./EditFooter";

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
            UnderFields={<EditFooter />}
          />
        </div>
      ) : (
        <CtaEdit />
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
  }
`;
