import { ref, set, onValue } from "firebase/database";
import database from "../data/firebaseConfig";

function saveUserMenu(username, menu) {
  const userRef = ref(database, "users/" + username);
  set(userRef, { menu: menu });
}

function getUserMenu(username, callback) {
  const userRef = ref(database, "users/" + username);
  onValue(userRef, (snapshot) => {
    const data = snapshot.val();
    callback(data ? data.menuState : null);
  });
}

export { saveUserMenu, getUserMenu };
