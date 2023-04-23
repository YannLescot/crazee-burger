import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../../../theme";

export default function EditFooter() {
  return (
    <EditFooterStyled>
      <span>
        Cliquer sur un produit du menu pour le modifier{" "}
        <span className="decorated">en temps réel</span>
      </span>
    </EditFooterStyled>
  );
}

const EditFooterStyled = styled.div`
  display: flex;
  align-items: center;
  color: ${theme.colors.primary};
  font-size: ${theme.font.sizes.SM};
  height: 38px;

  span {
    .decorated {
      display: inline;
      text-decoration: underline;
    }
  }
`;
