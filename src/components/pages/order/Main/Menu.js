import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import ProductCard from "../../../reusable/ProductCard";

export default function Menu() {
  return (
    <MenuStyled>
      {fakeMenu2.map(
        ({
          imageSource,
          title,
          price,
          quantity,
          isAvailable,
          isAdvertised,
        }) => {
          console.log(price);
          return (
            <ProductCard
              imageSource={imageSource}
              title={title}
              price={price}
              quantity={quantity}
              isAvailable={isAvailable}
              isAdvertised={isAdvertised}
            />
          );
        }
      )}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  padding: 50px 50px 150px;

  min-height: 75%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);

  grid-row-gap: 40px;
  grid-column-gap: 5px;
`;
