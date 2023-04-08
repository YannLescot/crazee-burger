import React, { useContext } from "react";
import { FaHamburger } from "react-icons/fa";
import { MdOutlineEuro } from "react-icons/md";
import { BsFillCameraFill } from "react-icons/bs";
import OrderContext from "../../../../../../context/OrderContext";

export const InputsConfig = (tab) => {
  const { productToAdd, productToEdit } = useContext(OrderContext);

  const inputsConfig = [
    {
      value: tab === "add" ? productToAdd.title : productToEdit.title,
      field: "title",
      placeholder: "Nom du produit (ex: Super Burger)",
      Icon: <FaHamburger />,
    },
    {
      type: "url",
      value:
        tab === "add" ? productToAdd.imageSource : productToEdit.imageSource,
      field: "imageSource",
      placeholder:
        "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
      Icon: <BsFillCameraFill />,
    },
    {
      value: tab === "add" ? productToAdd.price : productToEdit.price,
      field: "price",
      placeholder: "Prix",
      Icon: <MdOutlineEuro />,
    },
  ];

  return inputsConfig;
};
