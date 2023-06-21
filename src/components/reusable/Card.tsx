import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../theme";
import { TiDelete } from "react-icons/ti";
import QuantityButton from "./QuantityButton";
import ProductDetails from "./ProductDetails";

interface CardProps {
  imageSource?: string;
  title?: string;
  leftDescription?: string;
  hasDeleteButton?: boolean;
  onDelete?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClick: () => void;
  isHoverable: boolean;
  isSelected: boolean;
  basketQuantity?: number;
  addProductToBasket?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  removeProductFromBasket?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onIncrement?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onDecrement?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  productDetails?: string;
}

export default function Card({
  imageSource,
  title,
  leftDescription,
  hasDeleteButton,
  onDelete,
  onClick,
  isHoverable,
  isSelected,
  basketQuantity,
  addProductToBasket,
  removeProductFromBasket,
  onIncrement,
  onDecrement,
  productDetails,
}: CardProps) {
  return (
    <CardStyled
      onClick={onClick}
      isSelected={isSelected}
      isHoverable={isHoverable}
    >
      <div className="topButtons">
        <ProductDetails className="productDetails" content={productDetails} />
        {hasDeleteButton && (
          <button className="closeBtn" onClick={onDelete}>
            <TiDelete className="closeBtnIcon" />
          </button>
        )}
      </div>
      <div className="image">
        <img src={imageSource} alt="produit" />
      </div>
      <div className="text-info">
        <strong className="title">{title}</strong>
        <div className="description">
          <p className="left-description">
            <span>{leftDescription}</span>
          </p>
          <div className="right-description">
            <QuantityButton
              label={basketQuantity ? basketQuantity : 0}
              onIncrement={basketQuantity ? onIncrement : addProductToBasket}
              onDecrement={
                basketQuantity === 1 ? removeProductFromBasket : onDecrement
              }
            />
          </div>
        </div>
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div<CardProps>`
  background: ${theme.colors.white};
  width: 200px;
  height: 300px;
  display: grid;
  grid-template-rows: 10% 55% 1fr;
  padding: 20px;
  padding-bottom: 10px;
  box-shadow: ${theme.shadows.medium};
  border-radius: ${theme.borderRadius.extraRound};

  ${({ isHoverable }) => isHoverable && hoverableStyle}

  .topButtons {
    position: relative;
    top: -5px;
    height: 30px;
    width: 100%;

    display: flex;
    align-items: center;

    .closeBtn {
      position: absolute;
      top: 0px;
      left: 85%;
      background-color: transparent;
      border: none;
      .closeBtnIcon {
        font-size: 30px;
        color: ${theme.colors.primary};
        border-radius: ${theme.borderRadius.round};
        cursor: pointer;

        z-index: 3;

        &:hover {
          color: ${theme.colors.dark};

          &:active {
            color: ${theme.colors.primary};
          }
        }
      }
    }

    .productDetails {
      position: relative;
      top: 0px;
      right: 55%;
      color: ${theme.colors.dark};
      cursor: pointer;
    }
  }

  .image {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    height: auto;
    margin-bottom: 20px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .text-info {
    display: grid;
    grid-template-rows: 30% 70%;
    padding: 5px;
    user-select: none;

    .title {
      min-height: 45px;
      margin: auto 0;
      font-size: 28px;
      position: relative;
      bottom: 10px;
      font-weight: ${theme.font.weights.medium};
      color: ${theme.colors.dark};
      text-align: left;
      white-space: nowrap;
      overflow: hidden;
      width: 100%;
      text-overflow: ellipsis;
      font-family: ${theme.font.families.stylish};
    }

    .description {
      display: flex;
      justify-content: space-between;
      width: 100%;
      max-width: 100%;

      .left-description {
        max-width: 85px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-weight: ${theme.font.weights.medium};
        font-weight: ${theme.font.weights.medium};
        color: ${theme.colors.primary};

        span {
          display: block;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }

      .right-description {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: ${theme.font.sizes.P1};
      }
    }
  }

  ${({ isHoverable, isSelected }) => isHoverable && isSelected && selectedStyle}
`;

const hoverableStyle = css`
  &:hover {
    transition: transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out;
    cursor: pointer;
    transform: scale(1.05);
    box-shadow: ${theme.shadows.medium}, 0 0 10px 0.1px ${theme.colors.primary};
  }
`;

const selectedStyle = css`
  background: ${theme.colors.primary};
  color: ${theme.colors.white};

  .topButtons {
    .closeBtn {
      .closeBtnIcon {
        color: ${theme.colors.white};
        &:hover {
          color: ${theme.colors.dark};
          &:active {
            color: ${theme.colors.white};
          }
        }
      }
    }
  }

  .text-info {
    .title {
      color: ${theme.colors.white};
    }

    .description {
      .left-description {
        color: ${theme.colors.white};
      }

      .right-description {
        button {
          background: ${theme.colors.dark};
          color: ${theme.colors.white};
          border: 1px solid ${theme.colors.dark};
          &:hover {
            background: ${theme.colors.primary};
            color: ${theme.colors.white};
          }

          &:active {
            background: ${theme.colors.white};
            color: ${theme.colors.primary};
          }
        }

        div {
          background: ${theme.colors.dark};
          color: ${theme.colors.white};
          border: 1px solid ${theme.colors.dark};

          .increase,
          .decrease {
            &:hover {
              background: ${theme.colors.white};
              color: ${theme.colors.dark};
            }
            &:active {
              background: ${theme.colors.dark};
            }
          }
        }
      }
    }
  }
`;
