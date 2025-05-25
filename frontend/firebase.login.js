
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.VITE_API_KEY,
  authDomain: process.env.VITE_AUTH,
  projectId: process.env.VITE_PROJECT,
  storageBucket: process.env.VITE_STORAGE,
  messagingSenderId: process.env.VITE_MASS,
  appId: process.env.VITE_APP,
};

export const app = initializeApp(firebaseConfig);