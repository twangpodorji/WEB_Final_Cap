import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCqxdrfkcS9zGvj-MlD72dzzbghwvoZQMw",
  authDomain: "insagram-40deb.firebaseapp.com",
  projectId: "insagram-40deb",
  storageBucket: "insagram-40deb.appspot.com",
  messagingSenderId: "236676378441",
  appId: "1:236676378441:web:24785d90558d8253473498"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
