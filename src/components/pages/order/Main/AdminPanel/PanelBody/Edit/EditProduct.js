import React, { useContext } from "react";
import styled from "styled-components";
import EditFooter from "./EditFooter";
import OrderContext from "../../../../../../../context/OrderContext";
import ProductForm from "../ProductForm";

export default function EditProduct() {
  const {
    productToEdit,
    titleEditBoxRef,
    setProductToEdit,
    handleProductEdited,
  } = useContext(OrderContext);

  const onChange = (event) => {
    const { name, value } = event.target;

    const newProductToEdit = { ...productToEdit, [name]: value };
    setProductToEdit(newProductToEdit);

    handleProductEdited(newProductToEdit);
  };

  return (
    <EditProductStyled>
      <div>
        <ProductForm
          product={productToEdit}
          handleChange={onChange}
          titleRef={titleEditBoxRef}
        >
          <EditFooter />
        </ProductForm>
      </div>
    </EditProductStyled>
  );
}

const EditProductStyled = styled.div`
  height: 100%;
  width: 70%;

  display: grid;
  grid-column-gap: 20px;
  grid-row-gap: 10px;
  grid-template-rows: repeat(1fr, 1fr);
`;
