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

  selectProductToEdit: () => {},

  menu: [],
  handleProductEdit: () => {},
  handleProductDelete: () => {},
  handleProductAdd: () => {},
  reloadMenu: () => {},
  isCardSelected: () => {},

  basket: [],
  handleAddToBasket: () => {},
  handleRemoveFromBasket: () => {},
  isProductInBasket: () => {},

  isLoading: false,
});
