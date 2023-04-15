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

  handleEdit: () => {},
  handleSelectTab: () => {},
  focusTitleEditBox: () => {},
  handleCardDelete: () => {},
  reloadMenu: () => {},
  selectProductToEdit: () => {},
  handleAddFieldChange: () => {},
  handleProductAddition: () => {},
});
