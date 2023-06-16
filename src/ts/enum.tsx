import { Product } from "../utils/interfaces";

export const EMPTY_PRODUCT: Product = Object.freeze({
  id: "",
  title: "",
  imageSource: "",
  price: 0,
  productDetails: "",
});

export const DEFAULT_IMAGE_SOURCE = "/images/coming-soon.png";
