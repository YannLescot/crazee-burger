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
  canBlur,
  onBlur,
}) {
  return (
    <ProductFormStyled onSubmit={handleSubmit}>
      <ImagePreview imageSource={product.imageSource} />

      <div className="inputSection">
        {getInputsConfig(product).map(
          ({ index, type, value, name, placeholder, Icon, variant }) => {
            return (
              <TextInput
                className={name}
                key={index}
                ref={name === "title" ? titleRef : null}
                type={type}
                value={value}
                name={name}
                onChange={handleChange}
                placeholder={placeholder}
                Icon={Icon}
                variant={variant}
                onBlur={canBlur && onBlur}
                rows={name === "details" ? 6 : 1}
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
  grid-template-columns: 1fr 4fr;
  height: 100%;
  .inputSection {
    height: 100%;
    display: grid;
    grid-template-columns: 3fr 1.5fr;
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 8px;
    grid-row-gap: 8px;

    .title {
      grid-column: 1;
      grid-row: 1;
    }

    .imageSource {
      grid-column: 1;
      grid-row: 2;
    }

    .price {
      grid-column: 1;
      grid-row: 3;
    }

    .details {
      grid-column: 2;
      grid-row: span 3;
    }

    .formFooter {
      grid-column: 1;
      grid-row: 4;
    }
  }
`;
