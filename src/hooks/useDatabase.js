import { ref, set, get } from "firebase/database";
import database from "../data/firebaseConfig";

function saveUserMenu(username, menu) {
  const userRef = ref(database, "users/" + username);
  set(userRef, { menu: menu, loggedInOnce: true });
}

async function getUserMenu(username, callback) {
  const userRef = ref(database, "users/" + username);
  const snapshot = await get(userRef);

  //Second callback parameter is for newUser
  if (snapshot.exists()) {
    const data = snapshot.val();
    callback(data.menu, false);
  } else {
    callback(null, true);
  }
}

export { saveUserMenu, getUserMenu };
