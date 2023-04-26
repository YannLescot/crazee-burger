import { useState } from "react";
import { deepClone, findObjectById, removeObjectById } from "../utils/array";

export const useBasket = () => {
  const [basket, setBasket] = useState([]);

  const handleAddToBasket = (productID) => {
    const productInBasket = findObjectById(productID, basket);

    if (productInBasket) {
      productInBasket.quantity++;
      setBasket([...basket]);
      return;
    }

    const newBasketProduct = { id: productID, quantity: 1 };
    const newBasket = [newBasketProduct, ...basket];
    setBasket(newBasket);
  };

  const handleRemoveFromBasket = (productID) => {
    const basketCopy = deepClone(basket);

    const newBasket = removeObjectById(productID, basketCopy);
    setBasket(newBasket);
  };

  return {
    basket,
    handleAddToBasket,
    handleRemoveFromBasket,
  };
};
