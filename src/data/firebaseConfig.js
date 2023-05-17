import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "burgermvp-ae75d.firebaseapp.com",
  databaseURL:
    "https://burgermvp-ae75d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "burgermvp-ae75d",
  storageBucket: "burgermvp-ae75d.appspot.com",
  messagingSenderId: "415818110353",
  appId: "1:415818110353:web:08eb05b9619c1e89377630",
  measurementId: "G-S3570MRXL7",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;
