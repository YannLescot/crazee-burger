import { useState } from "react";
import { fakeMenu } from "../fakeData/fakeMenu";
import { deepClone, removeObjectById } from "../utils/array";

export const useMenu = () => {
  const [menu, setMenu] = useState(fakeMenu.SMALL);

  const handleProductAdd = (product) => {
    const menuCopy = deepClone(menu);
    const newMenu = [product, ...menuCopy];
    setMenu(newMenu);
  };

  const handleProductEdit = (productEdited) => {
    const newMenu = menu.map((product) =>
      product.id === productEdited.id ? productEdited : product
    );
    setMenu(newMenu);
  };

  const handleProductDelete = (id) => {
    const menuCopy = deepClone(menu);

    const newMenu = removeObjectById(id, menuCopy);
    setMenu(newMenu);
  };

  const reloadMenu = () => {
    setMenu(fakeMenu.SMALL);
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
