import { useState } from "react";
import { deepClone, findObjectById, removeObjectById } from "../utils/array";

export const useBasket = () => {
  const [basket, setBasket] = useState([]);

  const handleAddToBasket = (productID) => {
    const basketCopy = deepClone(basket);
    const productInBasket = findObjectById(productID, basketCopy);

    if (productInBasket) {
      incrementProductQuantity(productInBasket, basketCopy);
      setBasket(basketCopy);
      return;
    }

    addProductToBasket(productID, basketCopy);
  };

  const addProductToBasket = (productId, basketCopy) => {
    const newBasketProduct = { id: productId, quantity: 1 };
    const newBasket = [newBasketProduct, ...basketCopy];
    setBasket(newBasket);
  };

  const incrementProductQuantity = (product) => {
    product.quantity++;
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
