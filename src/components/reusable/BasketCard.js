import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../theme";
import { MdDeleteForever } from "react-icons/md";

export default function BasketCard({
  imageSource,
  title,
  price,
  quantity,
  onDelete,
  isClickable,
  isSelected,
  onClick,
}) {
  return (
    <BasketCardStyled
      isClickable={isClickable}
      isSelected={isSelected}
      onClick={onClick}
    >
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
  grid-template-columns: 1fr 4fr 1fr;
  align-items: center;
  box-sizing: border-box;
  width: 90%;
  min-height: 86px;
  padding: 8px 16px;
  margin: 10px 0;
  border-radius: ${theme.borderRadius.round};
  overflow: hidden;

  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadows.tiny};
  position: relative;

  cursor: ${({ isClickable }) => (isClickable ? "pointer" : "default")};

  img {
    width: 85px;
    height: 60px;

    object-fit: contain;
  }

  .description {
    margin-left: 14px;
    user-select: none;

    .title {
      min-height: 32px;
      max-width: 100px;
      font-size: ${theme.font.sizes.P3};
      line-height: 32px;
      font-family: ${theme.font.families.stylish};
      font-weight: ${theme.font.weights.bold};
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .prix {
      color: ${theme.colors.primary};
      font-size: ${theme.font.sizes.SM};
      justify-self: center;
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
      cursor: pointer;
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 95px;
      background-color: ${theme.colors.red};
      border: none;
      font-size: ${theme.font.sizes.P3};
      color: ${theme.colors.white};

      &:hover {
        color: ${theme.colors.dark};

        &:active {
          color: ${theme.colors.white};
        }
      }
    }
  }

  ${({ isClickable, isSelected }) => isClickable && isSelected && selectedStyle}
`;

const selectedStyle = css`
  background: ${theme.colors.primary};
  color: ${theme.colors.white};

  .description {
    .title {
      color: black;
    }

    .prix {
      color: ${theme.colors.white};
    }
  }

  .quantity {
    color: ${theme.colors.white};
  }
`;
