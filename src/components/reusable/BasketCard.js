import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";
import { MdDeleteForever } from "react-icons/md";

export default function BasketCard({
  imageSource,
  title,
  price,
  quantity,
  onDelete,
}) {
  return (
    <BasketCardStyled>
      <img src={imageSource} alt="produit" />
      <div className="description">
        <div className="title">{title}</div>
        <div className="prix">{price}</div>
      </div>
      <div className="quantity">x{quantity}</div>
      <button className="delete" onClick={onDelete}>
        <MdDeleteForever />
      </button>
    </BasketCardStyled>
  );
}

const BasketCardStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr 1.5fr;
  align-items: center;
  box-sizing: border-box;
  width: 90%;
  height: 85px;
  padding: 8px 16px;
  margin: 20px 0;
  border-radius: ${theme.borderRadius.extraRound};

  background-color: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.medium};

  img {
    width: 85px;
    height: 60px;
    background-color: aliceblue;

    object-fit: contain;
  }

  .description {
    margin-left: 14px;

    .title {
      font-size: ${theme.font.sizes.P3};
      line-height: 32px;
      font-family: ${theme.font.families.stylish};
      font-weight: ${theme.font.weights.bold};
    }

    .prix {
      color: ${theme.colors.primary};
      font-size: ${theme.font.sizes.SM};
    }
  }

  .quantity {
    color: ${theme.colors.primary};
  }

  .delete {
    display: none;
  }

  &:hover {
    .delete {
      display: block;
      cursor: pointer;
      position: relative;
      grid-column: 4;
      left: 131%;
      transform: translateX(-100%);
      width: 50px;
      height: 123%;
      border-top-right-radius: ${theme.borderRadius.extraRound};
      border-bottom-right-radius: ${theme.borderRadius.extraRound};
      border: none;
      background-color: ${theme.colors.red};
      font-size: ${theme.font.sizes.P3};
      color: ${theme.colors.white};
    }
  }
`;
