import React from "react";
import styled from "styled-components";
import NoImage from "./NoImage";
import { theme } from "../../../../../../theme";

export default function ImagePreview({ imageSource }) {
  return (
    <ImagePreviewStyled imageSource={imageSource}>
      {!imageSource ? <NoImage /> : <img src={imageSource} alt="Produit" />}
    </ImagePreviewStyled>
  );
}

const ImagePreviewStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius: ${theme.borderRadius.round};

  font-size: ${theme.font.sizes.P0};
  font-weight: ${theme.font.weights.regular};
  color: ${theme.colors.greySemiDark};

  width: 160px;
  height: 130px;

  //Make it so the border is 1 px solid greylight when there is no image, and none when there is an image
  border: ${({ imageSource }) =>
    imageSource ? "none" : `1px solid ${theme.colors.greyLight}`};

  img {
    border: 1px solid "transparent";
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;
  }
`;
