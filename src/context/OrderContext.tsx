import { createContext } from "react";
import { BasketProduct, Product } from "../utils/interfaces";

interface ContextType {
  isAdmin: boolean;
  setIsAdmin: (b: boolean) => void;

  isPanelCollapsed: boolean;
  setIsPanelCollapsed: (b: boolean) => void;

  activeTab: string;
  setActiveTab: (s: string) => void;

  productToAdd: Product;
  setProductToAdd: (p: object) => void;
  productToEdit: Product;
  setProductToEdit: (p: object) => void;
  selectProductToEdit: (id: string) => void;

  titleEditBoxRef: React.RefObject<HTMLInputElement>;

  menu: Product[];
  handleProductEdit: (p: object) => void;
  handleProductDelete: (id: string) => void;
  handleProductAdd: (p: object) => void;

  reloadMenu: () => void;
  isCardSelected: (id: string) => boolean;
  basket: BasketProduct[];

  handleAddToBasket: (id: string) => void;
  handleRemoveFromBasket: (id: string) => void;
  handleEmptyBasket: () => void;
  isProductInBasket: (p: object) => boolean;
  updateProductQuantity: (
    product: BasketProduct,
    quantityModif: number
  ) => void;

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
    id: "",
    imageSource: "",
    title: "",
    price: "",
    productDetails: "",
  },
  setProductToAdd: () => {},
  productToEdit: {
    id: "",
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
