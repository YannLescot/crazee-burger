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

  handleEdit: () => {},
  handleSelectTab: () => {},
  handlePanelCollapsing: () => {},
  handleAdminChange: () => {},
  focusTitleEditBox: () => {},
  handleCardDelete: () => {},
  reloadMenu: () => {},
  selectProductToEdit: () => {},
  handleAddFieldChange: () => {},
  handleProductAddition: () => {},
});
