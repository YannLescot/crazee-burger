import { DEFAULT_IMAGE_SOURCE } from "../js/enum";

export function getImageSource(imageSource: string) {
  return imageSource || DEFAULT_IMAGE_SOURCE;
}
