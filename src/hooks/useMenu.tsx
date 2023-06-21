import { useState } from "react";
import { fakeMenu } from "../fakeData/fakeMenu";
import { deepClone, removeObjectById } from "../utils/array";
import { saveUserMenu } from "./useDatabase";
import { Product } from "../utils/interfaces";

export const useMenu = (userName: string) => {
  const [menu, setMenu] = useState<Product[]>([]);

  const handleProductAdd = (product: Product) => {
    const menuCopy = deepClone(menu);
    const newMenu = [product, ...menuCopy];
    setMenu(newMenu);
    saveUserMenu(userName, newMenu);
  };

  const handleProductEdit = (productEdited: Product) => {
    const newMenu = menu.map((product) =>
      product.id === productEdited.id ? productEdited : product
    );
    setMenu(newMenu);
    saveUserMenu(userName, newMenu);
  };

  const handleProductDelete = (id: string) => {
    const menuCopy = deepClone(menu);

    const newMenu = removeObjectById(id, menuCopy) as Product[];
    setMenu(newMenu);
    saveUserMenu(userName, newMenu);
  };

  const reloadMenu = () => {
    setMenu(fakeMenu.LARGE);
    saveUserMenu(userName, fakeMenu.LARGE);
  };

  return {
    menu,
    setMenu,
    handleProductAdd,
    handleProductDelete,
    handleProductEdit,
    reloadMenu,
  };
};
