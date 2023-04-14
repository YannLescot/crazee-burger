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

  handleSelectTab: () => {},
  handlePanelCollapsing: () => {},
  handleAdminChange: () => {},
  focusTitleEditBox: () => {},
  handleCardDelete: () => {},
  reloadMenu: () => {},
  selectProductToEdit: () => {},
  handleEditFieldChange: () => {},
  handleAddFieldChange: () => {},
  handleProductAddition: () => {},
});
