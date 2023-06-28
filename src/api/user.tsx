import { ref, set, get } from "firebase/database";
import database from "../data/firebaseConfig";
import { Product } from "../utils/interfaces";
import { fakeMenu } from "../fakeData/fakeMenu";

function saveUserMenu(username: string, menu: Product[]) {
  const userRef = ref(database, "users/" + username);
  set(userRef, { menu: menu });
}

async function getUserMenu(username: string) {
  const userRef = ref(database, "users/" + username);
  const snapshot = await get(userRef);

  return snapshot.exists() ? snapshot.val().menu : null;
}

const createUser = (username: string) => {
  const userRef = ref(database, "users/" + username);
  set(userRef, { menu: fakeMenu.LARGE });
};

const authanticateUser = async (username: string) => {
  const existingUserMenu = await getUserMenu(username);

  if (!existingUserMenu) {
    createUser(username);
  }
};

export { authanticateUser, saveUserMenu, getUserMenu };
