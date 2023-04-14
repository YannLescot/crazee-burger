import React, { useContext } from "react";
import styled from "styled-components";
import ProductForm from "./ProductForm";
import OrderContext from "../../../../../../context/OrderContext";
import CtaEdit from "./CtaEdit";
import EditFooter from "./EditFooter";

export default function EditProduct() {
  const { productToEdit, titleEditBoxRef, handleEditFieldChange } =
    useContext(OrderContext);

  return (
    <EditProductStyled>
      {productToEdit ? (
        <div>
          <ProductForm
            product={productToEdit}
            handleChange={handleEditFieldChange}
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

  display: grid;
  grid-column-gap: 20px;
  grid-row-gap: 10px;
  grid-template-rows: repeat(1fr, 1fr);
`;
