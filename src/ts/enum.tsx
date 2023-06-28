import { Product } from "../utils/interfaces";

export const EMPTY_PRODUCT: Product = Object.freeze({
  id: "",
  title: "",
  imageSource: "",
  price: 0,
  quantity: 0,
  productDetails: "",
});

export const DEFAULT_IMAGE_SOURCE = "/images/coming-soon.png";

export const NO_INGREDIENTS =
  "Les ingrédients n'ont pas été renseignés pour ce produit.";

export const EMPTY_BASKET_MESSAGE = "Votre panier est vide.";
