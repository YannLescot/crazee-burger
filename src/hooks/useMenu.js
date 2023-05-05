import { useState } from "react";
import { fakeMenu } from "../fakeData/fakeMenu";
import { deepClone, removeObjectById } from "../utils/array";
import { storeLocally } from "../utils/window";

export const useMenu = (userName) => {
  const [menu, setMenu] = useState(fakeMenu.SMALL);

  const handleProductAdd = (product) => {
    const menuCopy = deepClone(menu);
    const newMenu = [product, ...menuCopy];
    setMenu(newMenu);
    storeLocally(userName, "menu", newMenu);
  };

  const handleProductEdit = (productEdited) => {
    const newMenu = menu.map((product) =>
      product.id === productEdited.id ? productEdited : product
    );
    setMenu(newMenu);
    storeLocally(userName, "menu", newMenu);
  };

  const handleProductDelete = (id) => {
    const menuCopy = deepClone(menu);

    const newMenu = removeObjectById(id, menuCopy);
    setMenu(newMenu);
    storeLocally(userName, "menu", newMenu);
  };

  const reloadMenu = () => {
    setMenu(fakeMenu.SMALL);
    storeLocally(userName, "menu", fakeMenu.SMALL);
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
