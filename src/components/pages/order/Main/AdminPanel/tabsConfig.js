import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import EditHint from "./PanelBody/Edit/EditHint";
import EditProduct from "./PanelBody/Edit/EditProduct";
import AddProduct from "./PanelBody/Add/AddProduct";
import { findObjectById } from "../../../../../utils/array";

export const getTabsConfig = (isAnyProductSelected) => [
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

export const getTabSelected = (tabs, currentTabSelected) => {
  return findObjectById(currentTabSelected, tabs);
};
