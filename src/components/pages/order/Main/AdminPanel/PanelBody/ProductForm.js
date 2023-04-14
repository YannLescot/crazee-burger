import React from "react";
import styled from "styled-components";
import TextInput from "../../../../../reusable/TextInput";
import { getInputsConfig } from "../inputsConfig";
import ImagePreview from "./ImagePreview";

export default function ProductForm({
  product,
  handleChange,
  handleSubmit,
  titleRef,
  UnderFields,
}) {
  return (
    <ProductFormStyled onSubmit={handleSubmit}>
      <ImagePreview imageSource={product.imageSource} />

      <div className="inputSection">
        {getInputsConfig(product).map(
          ({ type, value, name, placeholder, Icon }) => {
            return (
              <TextInput
                key={name}
                ref={name === "title" ? titleRef : null}
                type={type && type}
                value={value}
                name={name}
                onChange={handleChange}
                placeholder={placeholder}
                Icon={Icon}
                variant="minimalist"
              />
            );
          }
        )}
        <div className="underField">{UnderFields && UnderFields}</div>
      </div>
    </ProductFormStyled>
  );
}

const ProductFormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 3fr 1fr;
  grid-column-gap: 20px;

  .inputSection {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    grid-row-gap: 8px;
    .underField {
      grid-column: 1;
      grid-row: 4;
    }
  }
`;
