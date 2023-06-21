import { useState } from "react";
import { deepClone, findObjectById, removeObjectById } from "../utils/array";
import { storeLocally } from "../utils/window";
import { BasketProduct } from "../utils/interfaces";

export const useBasket = (userName: string) => {
  const [basket, setBasket] = useState<BasketProduct[]>([]);

  const handleAddToBasket = (productID: string) => {
    const basketCopy = deepClone(basket);
    const productInBasket = findObjectById(
      productID,
      basketCopy
    ) as BasketProduct;

    if (productInBasket) {
      updateProductQuantity(productInBasket, +1);
      setBasket(basketCopy);
      storeLocally(userName, "basket", basketCopy);
      return;
    }

    addNewProductToBasket(productID, basketCopy);
  };

  const addNewProductToBasket = (
    productId: string,
    basketCopy: BasketProduct[]
  ) => {
    const newBasketProduct = { id: productId, quantity: 1 };
    const newBasket = [newBasketProduct, ...basketCopy];
    setBasket(newBasket);
    storeLocally(userName, "basket", newBasket);
  };

  const updateProductQuantity = (product: BasketProduct, action: number) => {
    setBasket((prevBasket) => {
      const basketCopy = deepClone(prevBasket);
      const productInBasket = findObjectById(
        product.id,
        basketCopy
      ) as BasketProduct;
      if (!productInBasket) return prevBasket;
      productInBasket.quantity += action;
      storeLocally(userName, "basket", basketCopy);
      return basketCopy;
    });
  };

  const handleRemoveFromBasket = (productID: string) => {
    const basketCopy = deepClone(basket);

    const newBasket = removeObjectById(
      productID,
      basketCopy
    ) as BasketProduct[];
    setBasket(newBasket);
    storeLocally(userName, "basket", newBasket);
  };

  const handleEmptyBasket = () => {
    setBasket([]);
    storeLocally(userName, "basket", []);
  };

  return {
    basket,
    setBasket,
    handleAddToBasket,
    handleRemoveFromBasket,
    handleEmptyBasket,
    updateProductQuantity,
  };
};
