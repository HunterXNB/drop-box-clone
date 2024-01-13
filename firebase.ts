import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCm5hjad2K2R9uBqMf0AWm0BED-R_r8XIU",
  authDomain: "drop-box-69c75.firebaseapp.com",
  projectId: "drop-box-69c75",
  storageBucket: "drop-box-69c75.appspot.com",
  messagingSenderId: "132599841841",
  appId: "1:132599841841:web:7931de35caeb883fc6c110",
};
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
export { db, storage };
