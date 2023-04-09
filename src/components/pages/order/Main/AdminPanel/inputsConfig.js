import React from "react";
import { FaHamburger } from "react-icons/fa";
import { MdOutlineEuro } from "react-icons/md";
import { BsFillCameraFill } from "react-icons/bs";

export const getInputsConfig = (product) => [
  {
    value: product.title,
    field: "title",
    placeholder: "Nom du produit (ex: Super Burger)",
    Icon: <FaHamburger />,
  },
  {
    type: "url",
    value: product.imageSource,
    field: "imageSource",
    placeholder:
      "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
    Icon: <BsFillCameraFill />,
  },
  {
    value: product.price ? product.price : "",
    field: "price",
    placeholder: "Prix",
    Icon: <MdOutlineEuro />,
  },
];
