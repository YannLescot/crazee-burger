import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import AddProduct from "./AddProduct/AddProduct";
import EditProduct from "./AddProduct/EditProduct";

export const tabsConfig = [
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
    Content: <EditProduct />,
  },
];

export const getTabSelected = (tabs, currentTabSelected) =>
  tabs.find((tab) => tab.id === currentTabSelected);
