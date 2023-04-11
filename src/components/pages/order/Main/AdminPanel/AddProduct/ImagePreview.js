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
  box-sizing: border-box;
  border-radius: ${theme.borderRadius.round};

  font-size: ${theme.fonts.size.P0};
  font-weight: ${theme.fonts.weight.regular};
  color: ${theme.colors.greySemiDark};

  width: 215px;
  height: 120px;

  //Make it so the border is 1 px solid greylight when there is no image, and none when there is an image
  border: ${({ imageSource }) =>
    imageSource ? "none" : `1px solid ${theme.colors.greyLight}`};

  img {
    height: 215px;
    width: 120px;
    object-fit: contain;
  }
`;
