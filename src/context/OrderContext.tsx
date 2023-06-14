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
  setProductToAdd: React.Dispatch<React.SetStateAction<Product>>;
  productToEdit: Product;
  setProductToEdit: React.Dispatch<React.SetStateAction<Product>>;
  selectProductToEdit: (id: string) => void;

  titleEditBoxRef: React.RefObject<HTMLInputElement | null>;

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
    price: 0,
    productDetails: "",
  },
  setProductToAdd: () => {},
  productToEdit: {
    id: "",
    imageSource: "",
    title: "",
    price: 0,
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

  updateProductQuantity: () => {},

  isLoading: false,

  wasOrderConfirmed: false,
  handleOrderConfirmation: () => {},
});
