import React from "react";
import styled from "styled-components";
import PrimaryButton from "./PrimaryButton";
import { theme } from "../../theme";
import { TiDelete } from "react-icons/ti";

export default function Card({
  imageSource,
  title,
  leftDescription,
  hasDeleteButton,
  onDelete,
}) {
  return (
    <CardStyled>
      <div className="image">
        {hasDeleteButton && (
          <TiDelete className="closeBtn" onClick={onDelete} />
        )}
        <img src={imageSource} alt="produit" />
      </div>
      <div className="text-info">
        <strong className="title">{title}</strong>
        <div className="description">
          <p className="left-description">{leftDescription}</p>
          <div className="right-description">
            <PrimaryButton label={"Ajouter"} variant="basket" />
          </div>
        </div>
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  background: ${theme.colors.white};
  width: 200px;
  height: 300px;
  display: grid;
  grid-template-rows: 65% 1fr;
  padding: 20px;
  padding-bottom: 10px;
  box-shadow: ${theme.shadows.medium};
  border-radius: ${theme.borderRadius.extraRound};

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

    .closeBtn {
      position: relative;
      top: -10px;
      right: -10px;
      font-size: 35px;
      color: ${theme.colors.primary};
      border-radius: ${theme.borderRadius.round};
      cursor: pointer;

      &:hover {
        color: ${theme.colors.red};

        &:active {
          color: ${theme.colors.primary};
        }
      }
    }
  }

  .text-info {
    display: grid;
    grid-template-rows: 30% 70%;
    padding: 5px;

    .title {
      margin: auto 0;
      font-size: ${theme.fonts.size.P4};
      position: relative;
      bottom: 10px;
      font-weight: ${theme.fonts.weight.bold};
      color: ${theme.colors.dark};
      text-align: left;
      white-space: nowrap;
      overflow: hidden;
      width: 100%;
      text-overflow: ellipsis;
      font-family: "Amatic SC", cursive;
    }

    .description {
      display: grid;
      grid-template-columns: 1fr 1fr;

      .left-description {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-weight: ${theme.fonts.weight.medium};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: ${theme.fonts.weight.medium};
        color: ${theme.colors.primary};
      }

      .right-description {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: ${theme.fonts.size.P1};
      }
    }
  }
`;
