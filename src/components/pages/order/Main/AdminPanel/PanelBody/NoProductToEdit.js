import React from "react";
import { HiCursorClick } from "react-icons/hi";
import styled from "styled-components";
import { theme } from "../../../../../../theme";

export default function NoProductToEdit() {
  return (
    <NoProductToEditStyled>
      <p>
        Cliquer sur un produit du menu pour le modifier{" "}
        <HiCursorClick className="icon" />
      </p>
    </NoProductToEditStyled>
  );
}

const NoProductToEditStyled = styled.div`
  display: grid;
  margin-top: 30px;
  grid-column-gap: 20px;
  grid-template-columns: 4fr 2fr;
  p {
    font-family: "amatic sc", cursive;
    font-size: ${theme.fonts.size.P3};
    color: ${theme.colors.greyBlue};
    display: flex;
    align-items: center;
    padding: 0px;
    .icon {
      margin-left: 10px;
    }
  }
`;
