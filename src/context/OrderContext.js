import { createContext } from "react";

export default createContext({
  isAdmin: false,
  isPanelCollapsed: false,
  activeTab: "",
  menu: [],
  productToAdd: {},
  productToEdit: {},
  titleEditBoxRef: {},
  wasProductAdded: false,

  setProductToEdit: () => {},
  setIsAdmin: () => {},
  setIsPanelCollapsed: () => {},
  setActiveTab: () => {},

  handleEdit: () => {},
  focusTitleEditBox: () => {},
  handleCardDelete: () => {},
  reloadMenu: () => {},
  selectProductToEdit: () => {},
  handleAddFieldChange: () => {},
  handleProductAddition: () => {},
});
