import React, { useContext } from "react";
import styled from "styled-components";
import ProductForm from "./ProductForm";
import OrderContext from "../../../../../../context/OrderContext";
import EditFooter from "./EditFooter";

export default function EditProduct() {
  const { productToEdit, titleEditBoxRef, setProductToEdit, handleEdit } =
    useContext(OrderContext);

  const onChange = (event) => {
    const { name, value } = event.target;

    const newProductToEdit = { ...productToEdit, [name]: value };
    setProductToEdit(newProductToEdit);

    handleEdit(newProductToEdit);
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
