import React, { useContext } from "react";
import { BsFillCameraFill } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";
import { MdOutlineEuro } from "react-icons/md";
import styled from "styled-components";
import { theme } from "../../../../../../theme";
import PrimaryButton from "../../../../../reusable/PrimaryButton";
import TextInput from "../../../../../reusable/TextInput";
import AddProductContext from "../../../../../../context/AddProductContext";

export default function AddForm({ onSubmit, wasProductAdded }) {
  const { productToAdd, setProductToAdd } = useContext(AddProductContext);

  const handleFieldChange = (fieldName, value) => {
    setProductToAdd({ ...productToAdd, [fieldName]: value });
  };

  return (
    <AddFormStyled onSubmit={onSubmit}>
      <TextInput
        value={productToAdd.title}
        onChange={(e) => handleFieldChange("title", e.target.value)}
        placeholder={"Nom du produit (ex: Super Burger)"}
        Icon={<FaHamburger className="icon" />}
        variant="minimalist"
        className="textInput"
      />
      <TextInput
        type="url"
        value={productToAdd.imageSource}
        onChange={(e) => handleFieldChange("imageSource", e.target.value)}
        placeholder={
          "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
        }
        Icon={<BsFillCameraFill className="icon" />}
        variant="minimalist"
        className="textInput"
      />
      <TextInput
        value={productToAdd.price}
        onChange={(e) => handleFieldChange("price", e.target.value)}
        placeholder={"Prix"}
        Icon={<MdOutlineEuro className="icon" />}
        variant="minimalist"
        className="textInput"
      />
      <div className="addSection">
        <PrimaryButton
          label={"Ajouter un nouveau produit au menu"}
          variant="add"
          className={"addButton"}
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
  .addSection {
    display: flex;
    .addButton {
      width: 275px;
      height: 34px;
    }
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
