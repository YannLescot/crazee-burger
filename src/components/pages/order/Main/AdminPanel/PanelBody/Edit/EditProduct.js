import React, { useContext } from "react";
import styled from "styled-components";
import EditFooter from "./EditFooter";
import OrderContext from "../../../../../../../context/OrderContext";
import ProductForm from "../ProductForm";
import { useDisplaySuccessMessages } from "../../../../../../../hooks/useDisplaySuccessMessages";

export default function EditProduct() {
  const {
    productToEdit,
    titleEditBoxRef,
    setProductToEdit,
    handleProductEdit,
  } = useContext(OrderContext);

  const {
    wasProductEdited,
    displaySuccessEditMessage,
    registeredEdition,
    setRegisteredEdition,
  } = useDisplaySuccessMessages();

  const onChange = (event) => {
    const { name, value } = event.target;

    const newProductToEdit = { ...productToEdit, [name]: value };
    setProductToEdit(newProductToEdit);

    handleProductEdit(newProductToEdit);
    setRegisteredEdition(true);
  };

  const handleOnBlur = () => {
    if (registeredEdition) {
      displaySuccessEditMessage();
    }
  };

  return (
    <EditProductStyled>
      <div>
        <ProductForm
          product={productToEdit}
          handleChange={onChange}
          titleRef={titleEditBoxRef}
          shouldBlur={true}
          onBlur={handleOnBlur}
        >
          <EditFooter wasProductEdited={wasProductEdited} />
        </ProductForm>
      </div>
    </EditProductStyled>
  );
}

const EditProductStyled = styled.div`
  height: 100%;
  width: 80%;
  display: grid;
`;
