import { initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { connectStorageEmulator, getStorage } from "firebase/storage";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQbdMAYFeT25GQvVN7aHxmnBd_Bl2mXxo",
  authDomain: "message-app-e162c.firebaseapp.com",
  projectId: "message-app-e162c",
  storageBucket: "message-app-e162c.appspot.com",
  messagingSenderId: "398840737030",
  appId: "1:398840737030:web:91b2a55f54f203e4b28287",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

connectFirestoreEmulator(db, '127.0.0.1', 8080);
connectAuthEmulator(auth, "http://127.0.0.1:9099");
connectStorageEmulator(storage, "127.0.0.1", 9199);