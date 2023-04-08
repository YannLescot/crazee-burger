import React, { useContext } from "react";
import { FaHamburger } from "react-icons/fa";
import { MdOutlineEuro } from "react-icons/md";
import { BsFillCameraFill } from "react-icons/bs";
import OrderContext from "../../../../../../context/OrderContext";

export const InputsConfig = () => {
  const { productToAdd } = useContext(OrderContext);

  const inputsConfig = [
    {
      value: productToAdd.title,
      field: "title",
      placeholder: "Nom du produit (ex: Super Burger)",
      Icon: <FaHamburger />,
    },
    {
      type: "url",
      value: productToAdd.imageSource,
      field: "imageSource",
      placeholder:
        "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
      Icon: <BsFillCameraFill />,
    },
    {
      value: productToAdd.price,
      field: "price",
      placeholder: "Prix",
      Icon: <MdOutlineEuro />,
    },
  ];

  return inputsConfig;
};
