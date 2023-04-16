import { createContext } from "react";

export default createContext({
  isAdmin: false,
  setIsAdmin: () => {},
  isPanelCollapsed: false,
  setIsPanelCollapsed: () => {},
  activeTab: "",
  setActiveTab: () => {},
  productToAdd: {},
  setProductToAdd: () => {},
  productToEdit: {},
  setProductToEdit: () => {},
  titleEditBoxRef: {},
  focusTitleEditBox: () => {},

  handleProductEdited: () => {},
  handleProductDelete: () => {},
  handleProductAdd: () => {},
  reloadMenu: () => {},

  menu: [],
  wasProductAdded: false,
});
