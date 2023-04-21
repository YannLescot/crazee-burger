import { useState } from "react";
import { deepClone } from "../utils/array";

export const useBasket = () => {
  const [basket, setBasket] = useState([]);

  const handleAddToBasket = (productID) => {
    const productInBasket = basket.find((item) => item.id === productID);
    if (productInBasket) {
      productInBasket.quantity++;
      setBasket([...basket]);
      return;
    }
    const newProduct = { id: productID, quantity: 1 };
    const newBasket = [newProduct, ...basket];
    setBasket(newBasket);
  };

  const handleRemoveFromBasket = (productID) => {
    const basketCopy = deepClone(basket);

    const newBasket = basketCopy.filter((item) => item.id !== productID);
    setBasket(newBasket);
  };

  const isProductInBasket = (productID) => {
    return basket.find((item) => item.id === productID);
  };

  return {
    basket,
    handleAddToBasket,
    handleRemoveFromBasket,
    isProductInBasket,
  };
};
