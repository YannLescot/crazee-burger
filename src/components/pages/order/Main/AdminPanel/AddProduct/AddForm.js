import React, { useContext } from "react";
import { FiCheck } from "react-icons/fi";
import styled from "styled-components";
import { theme } from "../../../../../../theme";
import PrimaryButton from "../../../../../reusable/PrimaryButton";
import TextInput from "../../../../../reusable/TextInput";
import AddProductContext from "../../../../../../context/AddProductContext";
import { InputsConfig } from "./inputsConfig";

export default function AddForm({ onSubmit, wasProductAdded }) {
  const { productToAdd, setProductToAdd } = useContext(AddProductContext);

  const handleFieldChange = (fieldName, value) => {
    setProductToAdd({ ...productToAdd, [fieldName]: value });
  };

  return (
    <AddFormStyled onSubmit={onSubmit}>
      {InputsConfig().map(({ type, value, field, placeholder, Icon }) => {
        return (
          <TextInput
            type={type && type}
            value={value}
            onChange={(e) => handleFieldChange(field, e.target.value)}
            placeholder={placeholder}
            Icon={Icon}
            variant="minimalist"
            className="textInput"
          />
        );
      })}

      <div className="addSection">
        <PrimaryButton
          label={"Ajouter un nouveau produit au menu"}
          variant="add"
        />
        {wasProductAdded && (
          <span className="succesAdd">
            <FiCheck className="icon" /> Ajouté avec succès !
          </span>
        )}
      </div>
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-row-gap: 8px;
  height: 165px;
  .textInput {
    width: 645px;
    height: 35px;
  }
  div {
    display: flex;
    width: 275px;
    height: 34px;
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
`;
