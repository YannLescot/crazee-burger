import React from "react";
import { FaHamburger } from "react-icons/fa";
import { MdOutlineEuro } from "react-icons/md";
import { BsFillCameraFill } from "react-icons/bs";

export const getInputsConfig = (product) => [
  {
    type: "text",
    value: product.title,
    name: "title",
    placeholder: "Nom du produit (ex: Super Burger)",
    Icon: <FaHamburger />,
  },
  {
    type: "url",
    value: product.imageSource,
    name: "imageSource",
    placeholder:
      "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
    Icon: <BsFillCameraFill />,
  },
  {
    value: product.price ? product.price : "",
    name: "price",
    type: "text",
    name: "price",
    placeholder: "Prix",
    Icon: <MdOutlineEuro />,
  },
];
