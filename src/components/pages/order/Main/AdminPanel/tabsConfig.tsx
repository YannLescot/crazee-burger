import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import EditHint from "./PanelBody/Edit/EditHint";
import EditProduct from "./PanelBody/Edit/EditProduct";
import AddProduct from "./PanelBody/Add/AddProduct";
import { findObjectById } from "../../../../../utils/array";
import { Product } from "../../../../../utils/interfaces";

export const getTabsConfig = (isAnyProductSelected: Product) => [
  {
    id: "add",
    Icon: <AiOutlinePlus />,
    label: "Ajouter un produit",
    Content: <AddProduct />,
  },
  {
    id: "edit",
    Icon: <MdModeEditOutline />,
    label: "Modifier un produit",
    Content: isAnyProductSelected ? <EditProduct /> : <EditHint />,
  },
];

export const getTabSelected = (tabs: object[], currentTabSelected: string) => {
  return findObjectById(currentTabSelected, tabs);
};
