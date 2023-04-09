import React, { useContext, useRef } from "react";
import { FiCheck } from "react-icons/fi";
import styled from "styled-components";
import { theme } from "../../../../../../theme";
import Button from "../../../../../reusable/Button";
import TextInput from "../../../../../reusable/TextInput";
import { InputsConfig } from "../inputsConfig";
import OrderContext from "../../../../../../context/OrderContext";

export default function ProductForm({ onSubmit, wasProductAdded, tab }) {
  const {
    productToAdd,
    setProductToAdd,
    productToEdit,
    setProductToEdit,
    menu,
    setMenu,
    titleEditBoxRef,
  } = useContext(OrderContext);

  //const inputRef = useRef(null);

  const handleFieldChange = (fieldName, value, tab) => {
    if (tab === "add") {
      setProductToAdd({ ...productToAdd, [fieldName]: value });
    } else if (tab === "edit") {
      setProductToEdit({ ...productToEdit, [fieldName]: value });

      const newMenu = menu.map((product) =>
        product.id === productToEdit.id
          ? { ...product, [fieldName]: value }
          : product
      );
      setMenu(newMenu);
    }
  };

  return (
    <ProductFormStyled onSubmit={onSubmit}>
      {InputsConfig(tab).map(
        ({ type, value, field, placeholder, Icon }, index) => {
          return (
            <TextInput
              ref={field === "title" ? titleEditBoxRef : null}
              key={field}
              type={type && type}
              value={value}
              index={index}
              onChange={(e) => handleFieldChange(field, e.target.value, tab)}
              placeholder={placeholder}
              Icon={Icon}
              variant="minimalist"
              productToEdit={productToEdit}
              tab={tab}
            />
          );
        }
      )}

      {tab === "add" && (
        <div className="addSection">
          <Button label={"Ajouter un nouveau produit au menu"} variant="add" />
          {wasProductAdded && (
            <span className="succesAdd">
              <FiCheck className="icon" /> Ajouté avec succès !
            </span>
          )}
        </div>
      )}

      {tab === "edit" && (
        <div className="editSection">
          Cliquer sur un produit du menu pour le modifier <p>en temps réel</p>
        </div>
      )}
    </ProductFormStyled>
  );
}

const ProductFormStyled = styled.form`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-row-gap: 8px;
  height: 165px;
  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 34px;
  }

  .addSection {
    span {
      display: flex;
      align-items: center;
      font-size: ${theme.fonts.size.SM};
      margin: 8px 18px;
      color: ${theme.colors.success};

      .icon {
        border: 1px solid ${theme.colors.success};
        border-radius: ${theme.borderRadius.circle};
        margin-right: 8px;
      }
    }
  }

  .editSection {
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.size.SM};
    p {
      text-decoration: underline;
      padding: 5px;
    }
  }
`;
