export interface BasketProduct {
  id: string;
  quantity: number;
}

export interface Product {
  id: string;
  imageSource: string;
  title: string;
  quantity: number;
  // isAvailable: boolean;
  // isAdvertised: boolean;
  price: number;
  productDetails: string;
}

export interface Tab {
  id: string;
  Icon: JSX.Element;
  label: string;
  Content: JSX.Element;
}

export interface UseMenuReturn {
  menu: Product[];
  setMenu: React.Dispatch<React.SetStateAction<Product[]>>;
  handleProductAdd: (product: Product) => void;
  handleProductDelete: (id: string) => void;
  handleProductEdit: (productEdited: Product) => void;
  reloadMenu: () => void;
}

export interface UseBasketReturn {
  basket: BasketProduct[];
  setBasket: React.Dispatch<React.SetStateAction<BasketProduct[]>>;
  handleAddToBasket: (productID: string) => void;
  handleRemoveFromBasket: (productID: string) => void;
  handleEmptyBasket: () => void;
  updateProductQuantity: (product: BasketProduct, action: number) => void;
}
