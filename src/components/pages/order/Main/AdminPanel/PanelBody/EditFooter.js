import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../../theme";

export default function EditFooter() {
  return (
    <EditFooterStyled>
      <div className="editSection">
        Cliquer sur un produit du menu pour le modifier <p>en temps réel</p>
      </div>
    </EditFooterStyled>
  );
}

const EditFooterStyled = styled.div`
  display: flex;
  align-items: center;
  color: ${theme.colors.primary};
  font-size: ${theme.fonts.size.SM};

  p {
    display: inline;
    text-decoration: underline;
    padding: 0px 0px;
    margin: 0px;
  }
`;
