import React from "react";
import { HiCursorClick } from "react-icons/hi";
import styled from "styled-components";
import { theme } from "../../../../../../theme";

export default function CtaEdit() {
  return (
    <CtaEditStyled>
      <p>
        Cliquer sur un produit du menu pour le modifier{" "}
        <HiCursorClick className="icon" />
      </p>
    </CtaEditStyled>
  );
}

const CtaEditStyled = styled.div`
  display: grid;
  margin-top: 30px;
  grid-column-gap: 20px;
  grid-template-columns: 4fr 2fr;
  p {
    font-family: ${theme.font.families.stylish};
    font-size: ${theme.font.sizes.P3};
    color: ${theme.colors.greyBlue};
    display: flex;
    align-items: center;
    padding: 0px;
    .icon {
      margin-left: 10px;
    }
  }
`;
