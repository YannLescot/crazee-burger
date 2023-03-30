import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

export const tabsConfig = [
  {
    id: "add",
    Icon: <AiOutlinePlus />,
    label: "Ajouter un produit",
    content: "Ajouter un produit",
  },
  {
    id: "edit",
    Icon: <MdModeEditOutline />,
    label: "Modifier un produit",
    content: "Modifier un produit",
  },
];

export const getTabSelected = (tabs, currentTabSelected) =>
  tabs.find((tab) => tab.id === currentTabSelected);
