import React from "react";
import styled from "styled-components";
import PrimaryButton from "./PrimaryButton";
import { theme } from "../../theme";

export default function Card({ imageSource, title, leftDescription }) {
  return (
    <CardStyled>
      <img src={imageSource} alt="" />
      <div className="text-info">
        <strong className="title">{title}</strong>
        <div className="description">
          <p className="left-description">{leftDescription}</p>
          <PrimaryButton label={"Ajouter"} className="card-primary-button" />
        </div>
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  padding-bottom: 10px;
  width: 200px;
  height: 300px;
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.extraRound};
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);

  img {
    margin-top: 30px;
    margin-bottom: 20px;
    width: 100%;
    height: 145px;
    object-fit: contain;
  }

  .text-info {
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    .title {
      width: 100%;
      font-family: "Amatic SC", cursive;
      font-size: 36px;
      font-weight: ${theme.fonts.weight.bold};
      margin: 0 5px;
    }

    .description {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin: 0 5px;

      .left-description {
        font-size: 16px;
        font-weight: ${theme.fonts.weight.regular};
        color: ${theme.colors.primary};
      }

      .card-primary-button {
        width: 95px;
        height: 38px;

        span {
          font-size: ${theme.fonts.size.XXS};
        }
      }
    }
  }
`;
