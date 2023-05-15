import { fakeMenu } from "../fakeData/fakeMenu";
import { retrieveFromLocalStorage } from "../utils/window";
import { getUserMenu, saveUserMenu } from "./useDatabase";

export const initOrderPage = (
  userName,
  menuContent,
  basketContent,
  setIsLoading
) => {
  if (userName) {
    setIsLoading(true);
    getUserMenu(userName, (menu, newUser) => {
      if (!newUser) {
        menuContent.setMenu(menu);
      } else if (newUser) {
        menuContent.setMenu(fakeMenu.LARGE);
        saveUserMenu(userName, fakeMenu.LARGE);
      }
      setIsLoading(false);
      const localBasket = retrieveFromLocalStorage(userName, "basket");
      if (localBasket) basketContent.setBasket(localBasket);
    });
  }
};
