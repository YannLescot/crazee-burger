import { useState } from "react";
import { fakeMenu } from "../fakeData/fakeMenu";
import { deepClone, removeObjectById } from "../utils/array";
import { saveUserMenu } from "./useDatabase";

export const useMenu = (userName) => {
  const [menu, setMenu] = useState([]);

  const handleProductAdd = (product) => {
    const menuCopy = deepClone(menu);
    const newMenu = [product, ...menuCopy];
    setMenu(newMenu);
    saveUserMenu(userName, newMenu);
  };

  const handleProductEdit = (productEdited) => {
    const newMenu = menu.map((product) =>
      product.id === productEdited.id ? productEdited : product
    );
    setMenu(newMenu);
    saveUserMenu(userName, newMenu);
  };

  const handleProductDelete = (id) => {
    const menuCopy = deepClone(menu);

    const newMenu = removeObjectById(id, menuCopy);
    setMenu(newMenu);
    saveUserMenu(userName, newMenu);
  };

  const reloadMenu = () => {
    setMenu(fakeMenu.SMALL);
    saveUserMenu(userName, fakeMenu.SMALL);
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
