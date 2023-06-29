import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import EditHint from "./PanelBody/Edit/EditHint";
import EditProduct from "./PanelBody/Edit/EditProduct";
import AddProduct from "./PanelBody/Add/AddProduct";
import { Product, Tab } from "../../../../../utils/interfaces";
import { findObjectById } from "../../../../../utils/array";

export const getTabsConfig = (isAnyProductSelected: Product): Tab[] => [
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

export const getTabSelected = (tabs: Tab[], currentTabSelected: string) => {
  const tabSelected = findObjectById(currentTabSelected, tabs);

  return tabSelected as Tab;
};
