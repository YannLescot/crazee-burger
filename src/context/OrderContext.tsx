import { createContext } from "react";

interface ContextType {
  isAdmin: boolean;
  setIsAdmin: (b: boolean) => void;
  isPanelCollapsed: boolean;
  setIsPanelCollapsed: (b: boolean) => void;
  activeTab: string;
  setActiveTab: (s: string) => void;
  productToAdd: {
    imageSource: string;
    title: string;
    price: string;
    productDetails: string;
  };
  setProductToAdd: (p: object) => void;
  productToEdit: {
    imageSource: "";
    title: "";
    price: "";
    productDetails: "";
  };
  setProductToEdit: (p: object) => void;
  titleEditBoxRef: React.RefObject<HTMLInputElement>;
  selectProductToEdit: (p: object) => void;
  menu: object[];
  handleProductEdit: (p: object) => void;
  handleProductDelete: (p: object) => void;
  handleProductAdd: (p: object) => void;
  reloadMenu: () => void;
  isCardSelected: (p: object) => void;
  basket: object[];
  handleAddToBasket: (p: object) => void;
  handleRemoveFromBasket: (p: object) => void;
  isProductInBasket: (p: object) => void;
  updateProductQuantity: (p: object) => void;
  isLoading: boolean;
  wasOrderConfirmed: boolean;
  handleOrderConfirmation: () => void;
}

export default createContext<ContextType>({
  isAdmin: false,
  setIsAdmin: () => {},
  isPanelCollapsed: false,
  setIsPanelCollapsed: () => {},
  activeTab: "",
  setActiveTab: () => {},
  productToAdd: {
    imageSource: "",
    title: "",
    price: "",
    productDetails: "",
  },
  setProductToAdd: () => {},
  productToEdit: {
    imageSource: "",
    title: "",
    price: "",
    productDetails: "",
  },
  setProductToEdit: () => {},
  titleEditBoxRef: { current: null },

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

  updateProductQuantity: () => {},

  isLoading: false,

  wasOrderConfirmed: false,
  handleOrderConfirmation: () => {},
});
