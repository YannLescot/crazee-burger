import React from "react";
import { FaHamburger } from "react-icons/fa";
import { MdEditNote, MdOutlineEuro } from "react-icons/md";
import { BsFillCameraFill } from "react-icons/bs";

export const getInputsConfig = (product) => [
  {
    index: 0,
    type: "text",
    value: product.title,
    name: "title",
    placeholder: "Nom du produit (ex: Super Burger)",
    Icon: <FaHamburger />,
    variant: "minimalist",
  },
  {
    index: 1,
    type: "url",
    value: product.imageSource,
    name: "imageSource",
    placeholder:
      "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
    Icon: <BsFillCameraFill />,
    variant: "minimalist",
  },
  {
    index: 2,
    value: product.price ? product.price : "",
    name: "price",
    type: "text",
    placeholder: "Prix",
    Icon: <MdOutlineEuro />,
    variant: "minimalist",
  },
  {
    className: "productDetails",
    index: 3,
    value: product.productDetails,
    name: "productDetails",
    type: "textarea",
    placeholder: "Ingrédients du produit (ex: nouilles, poulet, sauce soja...)",
    Icon: <MdEditNote />,
    variant: "large",
  },
];
