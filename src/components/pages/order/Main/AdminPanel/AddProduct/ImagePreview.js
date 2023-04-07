import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../../theme";

export default function ImagePreview({ imageSource }) {
  return (
    <ImagePreviewStyled imageSource={imageSource}>
      <div>
        {!imageSource ? (
          <p>Aucune image</p>
        ) : (
          <img src={imageSource} alt="Produit" />
        )}
      </div>
    </ImagePreviewStyled>
  );
}

const ImagePreviewStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${theme.borderRadius.round};

  font-size: ${theme.fonts.size.P0};
  font-weight: ${theme.fonts.weight.regular};
  color: ${theme.colors.greySemiDark};

  width: 215px;
  height: 120px;

  //Make it so the border is wite when there is an image
  border: 1px solid
    ${(props) =>
      props.imageSource ? theme.colors.white : theme.colors.greyLight};

  img {
    height: 215px;
    width: 120px;
    object-fit: contain;
  }
`;
