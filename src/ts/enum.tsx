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

export const NO_INGREDIENTS_MESSAGE =
  "Les ingrédients n'ont pas été renseignés pour ce produit.";

export const EMPTY_BASKET_MESSAGE = "Votre panier est vide.";

export const TABS = {
  ADD: "add",
  EDIT: "edit",
};

export const EMPTY_MENU_MESSAGES = {
  ADMIN: {
    TITLE: "Le menu est vide ?",
    SUBTITLE: "Cliquez ci-dessous pour le réinitialiser",
  },
  CUSTOMER: {
    TITLE: "Victime de notre succès ! :D",
    SUBTITLE: "De nouvelles recettes sont encours de préparation.",
    SUBTITLE2: "À très vite !",
  },
};

export const WELCOME_MESSAGES = {
  TITLE: "Régalez-vous chez nous !",
  LOGIN: "Quel est votre prénom ?",
};

export const ORDER_CONFIRMED_MESSAGE = "Votre commande est partie en cuisine !";
