import { createContext } from "react";

export default createContext({
  isAdmin: false,
  setIsAdmin: () => {},
  isPanelCollapsed: false,
  setIsPanelCollapsed: () => {},
  activeTab: "",
  setActiveTab: () => {},
  menu: [],
  setMenu: () => {},
  productToAdd: {},
  setProductToAdd: () => {},
});
