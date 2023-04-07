import React, { useContext } from "react";
import { FaHamburger } from "react-icons/fa";
import { MdOutlineEuro } from "react-icons/md";
import { BsFillCameraFill } from "react-icons/bs";
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
      Icon: <BsFillCameraFill className="icon" />,
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
