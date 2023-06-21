import { Product, BasketProduct, Tab } from "../utils/interfaces";

export function deepClone(obj: object) {
  return JSON.parse(JSON.stringify(obj));
}

export function isEmpty(array: (Product | BasketProduct)[]) {
  if (!array) return true;
  return array.length === 0;
}

export function findObjectById(
  id: string,
  array: (Product | BasketProduct | Tab)[]
) {
  return array.find((product) => product.id === id);
}

export function removeObjectById(
  id: string,
  array: (Product | BasketProduct)[]
) {
  return array.filter((product) => product.id !== id);
}

export function isProductSelected(
  productId: string,
  productSelectedId: string
) {
  return productId === productSelectedId;
}
