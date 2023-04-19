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

  menu: [],
  handleProductEdited: () => {},
  handleProductDelete: () => {},
  handleProductAdd: () => {},
  reloadMenu: () => {},

  basket: [],
  handleAddToBasket: () => {},
  handleRemoveFromBasket: () => {},

  wasProductAdded: false,
});
