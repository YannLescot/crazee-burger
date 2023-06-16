export interface BasketProduct {
  id: string;
  quantity: number;
}

export interface Product {
  id: string;
  imageSource: string;
  title: string;
  price: number;
  productDetails: string;
}

export interface Tab {
  id: string;
  Icon: JSX.Element;
  label: string;
  Content: JSX.Element;
}
