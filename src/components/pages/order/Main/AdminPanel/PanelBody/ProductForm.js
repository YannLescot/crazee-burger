import React from "react";
import styled from "styled-components";
import TextInput from "../../../../../reusable/TextInput";
import { getInputsConfig } from "../inputsConfig";
import ImagePreview from "./ImagePreview";

export default function ProductForm({
  product,
  handleChange,
  titleRef,
  imageSource,
}) {
  return (
    <ProductFormStyled>
      <div className="imgPreview">
        <ImagePreview imageSource={imageSource} />
      </div>

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
      </div>
    </ProductFormStyled>
  );
}

const ProductFormStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(1fr, 1fr);

  .inputSection {
    grid-area: 1 / 2 / 4 / -1;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    grid-row-gap: 8px;
  }
`;
