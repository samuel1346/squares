import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDYYHyJd5uSgQaU0ifh36IRSWMj5rcsUu0",
  authDomain: "squares-shop.firebaseapp.com",
  projectId: "squares-shop",
  storageBucket: "squares-shop.appspot.com",
  messagingSenderId: "345947548907",
  appId: "1:345947548907:web:097cfff25736c38312e2ae"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const storage = getStorage(app)
export const db = getFirestore(app)
export default db;

