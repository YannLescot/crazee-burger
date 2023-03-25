import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme";
import { fakeMenu2 } from "../../../fakeData/fakeMenu";
import ProductCard from "../../reusable/ProductCard";

export default function Main() {
  return (
    <MainStyled>
      <div className="menu">
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
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  background-color: ${theme.colors.background_white};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  width: 100%;
  height: 85vh;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  overflow-y: auto;

  .menu {
    background: #f5f5f7;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    padding: 50px 50px 150px;

    min-height: 75%;

    display: grid;
    grid-template-columns: repeat(4, 1fr);

    grid-row-gap: 40px;
    grid-column-gap: 5px;
  }
`;
