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
  children,
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
                type={type}
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
        <div className="formFooter">{children}</div>
      </div>
    </ProductFormStyled>
  );
}

const ProductFormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 3fr 1fr;
  height: 100%;

  .inputSection {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    grid-row-gap: 8px;
    .formFooter {
      grid-column: 1;
      grid-row: 4;
    }
  }
`;
