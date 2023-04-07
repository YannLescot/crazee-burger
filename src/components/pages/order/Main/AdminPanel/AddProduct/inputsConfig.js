import React, { useContext } from "react";
import { FaHamburger } from "react-icons/fa";
import { MdModeEditOutline, MdOutlineEuro } from "react-icons/md";
import AddProductContext from "../../../../../../context/AddProductContext";

export const InputsConfig = () => {
  const { productToAdd } = useContext(AddProductContext);

  const inputsConfig = [
    {
      value: productToAdd.title,
      field: "title",
      placeholder: "Nom du produit (ex: Super Burger)",
      Icon: <FaHamburger className="icon" />,
    },
    {
      type: "url",
      value: productToAdd.imageSource,
      field: "imageSource",
      placeholder:
        "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
      Icon: <MdModeEditOutline className="icon" />,
    },
    {
      value: productToAdd.price,
      field: "price",
      placeholder: "Prix",
      Icon: <MdOutlineEuro className="icon" />,
    },
  ];

  return inputsConfig;
};
