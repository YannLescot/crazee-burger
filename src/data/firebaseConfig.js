// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAInG_fvBorskRaTXjXKU_pLf2L94ZOUtA",
  authDomain: "burgermvp-ae75d.firebaseapp.com",
  databaseURL:
    "https://burgermvp-ae75d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "burgermvp-ae75d",
  storageBucket: "burgermvp-ae75d.appspot.com",
  messagingSenderId: "415818110353",
  appId: "1:415818110353:web:08eb05b9619c1e89377630",
  measurementId: "G-S3570MRXL7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;
