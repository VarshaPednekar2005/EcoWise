import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  //Firebase Credentials
  apiKey: "AIzaSyC9Oh1_OfER7haN-Zi3UetPwN-PM-_qBr4",
  authDomain: "healify-b26e2.firebaseapp.com",
  projectId: "healify-b26e2",
  storageBucket: "healify-b26e2.firebasestorage.app",
  messagingSenderId: "318460342469",
  appId: "1:318460342469:web:7130f35c22ffd09b1200ac",
  measurementId: "G-ZGQ2BL18WW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db };
