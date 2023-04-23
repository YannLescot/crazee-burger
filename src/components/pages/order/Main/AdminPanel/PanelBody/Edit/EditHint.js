import React from "react";
import { HiCursorClick } from "react-icons/hi";
import styled from "styled-components";
import { theme } from "../../../../../../../theme";

export default function EditHint() {
  return (
    <EditHintStyled>
      <span>
        Cliquer sur un produit du menu pour le modifier{" "}
        <HiCursorClick className="icon" />
      </span>
    </EditHintStyled>
  );
}

const EditHintStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 190px;

  span {
    font-family: ${theme.font.families.stylish};
    font-size: ${theme.font.sizes.P3};
    color: ${theme.colors.greyBlue};
    display: flex;
    align-items: center;
    .icon {
      margin-left: 10px;
    }
  }
`;
