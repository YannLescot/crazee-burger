import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import AddProduct from "./PanelBody/AddProduct";
import EditProduct from "./PanelBody/EditProduct";
import CtaEdit from "./PanelBody/CtaEdit";

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
    Content: isAnyProductSelected ? <EditProduct /> : <CtaEdit />,
  },
];

export const getTabSelected = (tabs, currentTabSelected) => {
  return tabs.find((tab) => tab.id === currentTabSelected);
};
