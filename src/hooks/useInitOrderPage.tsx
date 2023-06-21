import { fakeMenu } from "../fakeData/fakeMenu";
import {
  BasketProduct,
  Product,
  UseBasketReturn,
  UseMenuReturn,
} from "../utils/interfaces";
import { retrieveFromLocalStorage } from "../utils/window";
import { getUserMenu, saveUserMenu } from "./useDatabase";

interface initOrderPageProps {
  userName: string | undefined;
  menuContent: UseMenuReturn;
  basketContent: UseBasketReturn;
  setIsLoading: (isLoading: boolean) => void;
}

export const initOrderPage = ({
  userName,
  menuContent,
  basketContent,
  setIsLoading,
}: initOrderPageProps) => {
  if (userName) {
    setIsLoading(true);
    getUserMenu(userName, (menu: Product[], newUser: boolean) => {
      if (!newUser) {
        menuContent.setMenu(menu);
      }

      if (newUser) {
        menuContent.setMenu(fakeMenu.LARGE);
        saveUserMenu(userName, fakeMenu.LARGE);
      }
      setIsLoading(false);
      const localBasket = retrieveFromLocalStorage(userName, "basket");
      if (localBasket) basketContent.setBasket(localBasket);
    });
  }
};
