import { createContext } from "react";
import { BasketProduct, Product } from "../utils/interfaces";

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
  selectProductToEdit: (id: string) => void;

  titleEditBoxRef: React.RefObject<HTMLInputElement>;

  menu: Product[];
  handleProductEdit: (p: object) => void;
  handleProductDelete: (p: object) => void;
  handleProductAdd: (p: object) => void;

  reloadMenu: () => void;
  isCardSelected: (id: string) => boolean;
  basket: BasketProduct[];

  handleAddToBasket: (p: object) => void;
  handleRemoveFromBasket: (id: string) => void;
  handleEmptyBasket: () => void;
  isProductInBasket: (p: object) => boolean;
  updateProductQuantity: (p: object) => void;

  isLoading: boolean;
  wasOrderConfirmed: boolean;
  handleOrderConfirmation: (time: number) => void;
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
  isCardSelected: () => false,

  basket: [],
  handleAddToBasket: () => {},
  handleRemoveFromBasket: () => {},
  handleEmptyBasket: () => {},
  isProductInBasket: () => false,

  updateProductQuantity: () => {},

  isLoading: false,

  wasOrderConfirmed: false,
  handleOrderConfirmation: () => {},
});
