import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB8MN5Xr-2bErcBXsyHBrOaEKeJgHKufa0",
  authDomain: "whatsapp-96e33.firebaseapp.com",
  projectId: "whatsapp-96e33",
  storageBucket: "whatsapp-96e33.appspot.com",
  messagingSenderId: "85318757394",
  appId: "1:85318757394:web:61a67cc558eada00bffccb",
  measurementId: "G-KBXW5LJNBP",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
