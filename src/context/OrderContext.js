import { createContext } from "react";

export default createContext({
  isAdmin: false,
  setIsAdmin: () => {},
  isPanelCollapsed: false,
  setIsPanelCollapsed: () => {},
  activeTab: "",
  setActiveTab: () => {},
  menu: [],
  productToAdd: {},
  productToEdit: {},
  titleEditBoxRef: {},
  wasProductAdded: false,

  focusTitleEditBox: () => {},
  handleCardDelete: () => {},
  reloadMenu: () => {},
  selectProductToEdit: () => {},
  handleEditFieldChange: () => {},
  handleAddFieldChange: () => {},
  handleProductAddition: () => {},
});
