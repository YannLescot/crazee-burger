import { getUserMenu } from "../api/user";
import { fakeMenu } from "../fakeData/fakeMenu";
import { retrieveFromLocalStorage } from "../utils/window";

export const orderPageInitData = async (userName: string) => {
  const localBasket = retrieveFromLocalStorage(userName, "basket");
  const dbMenu = await getUserMenu(userName);

  return {
    menu: dbMenu ? dbMenu : fakeMenu.LARGE,
    basket: localBasket ? localBasket : [],
  };
};
