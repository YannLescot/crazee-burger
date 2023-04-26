import { useState } from "react";
import { deepClone, findObjectById, removeObjectById } from "../utils/array";

export const useBasket = () => {
  const [basket, setBasket] = useState([]);

  const handleAddToBasket = (productID) => {
    if (findObjectById(productID, basket)) {
      const productInBasket = findObjectById(productID, basket);
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

    const newBasket = removeObjectById(productID, basketCopy);
    setBasket(newBasket);
  };

  return {
    basket,
    handleAddToBasket,
    handleRemoveFromBasket,
  };
};
