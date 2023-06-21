import { BasketProduct, Product } from "./interfaces";

export const refreshPage = () => {
  window.location.reload();
};

export const storeLocally = (
  username: string,
  key: string,
  value: (Product | BasketProduct)[]
) => {
  if (!username) return;
  localStorage.setItem(username, JSON.stringify({ [key]: value }));
};

export const retrieveFromLocalStorage = (username: string, key: string) => {
  if (!username) return;
  const storedDataString = localStorage.getItem(username);
  if (!storedDataString) return;
  const storedData = JSON.parse(storedDataString);
  if (!storedData) return;
  return storedData[key];
};
