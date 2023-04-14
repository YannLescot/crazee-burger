import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../../theme";

export default function EditFooter() {
  return (
    <EditFooterStyled>
      <div className="editSection">
        Cliquer sur un produit du menu pour le modifier{" "}
        <span>en temps réel</span>
      </div>
    </EditFooterStyled>
  );
}

const EditFooterStyled = styled.div`
  display: flex;
  align-items: center;
  color: ${theme.colors.primary};
  font-size: ${theme.font.sizes.SM};

  span {
    display: inline;
    text-decoration: underline;
  }
`;
