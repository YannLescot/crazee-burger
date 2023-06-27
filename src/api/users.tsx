import { ref, set, get } from "firebase/database";
import database from "../data/firebaseConfig";
import { Product } from "../utils/interfaces";

function saveUserMenu(username: string, menu: Product[]) {
  const userRef = ref(database, "users/" + username);
  set(userRef, { menu: menu, loggedInOnce: true });
}

async function getUserMenu(username: string, callback: Function) {
  const userRef = ref(database, "users/" + username);
  const snapshot = await get(userRef);

  //Second callback parameter is for newUser
  if (snapshot.exists()) {
    const data = snapshot.val();
    callback(data.menu, false);
    return;
  }

  callback(null, true);
}

export { saveUserMenu, getUserMenu };
