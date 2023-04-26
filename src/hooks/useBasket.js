import { useState } from "react";
import { deepClone, findObjectById } from "../utils/array";

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

    const newBasket = basketCopy.filter((item) => item.id !== productID);
    setBasket(newBasket);
  };

  return {
    basket,
    handleAddToBasket,
    handleRemoveFromBasket,
  };
};
