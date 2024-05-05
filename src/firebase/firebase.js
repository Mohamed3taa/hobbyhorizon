import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAbcj0Rztp01GZK0opBt0tQIzEoPA3gqvY",
  authDomain: "hobbyhorizon-7a49c.firebaseapp.com",
  projectId: "hobbyhorizon-7a49c",
  storageBucket: "hobbyhorizon-7a49c.appspot.com",
  messagingSenderId: "594032617898",
  appId: "1:594032617898:web:d75d73cccbdcdc9c7263d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);