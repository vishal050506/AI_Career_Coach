import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCciiVfjGUjPTP3eX_GOVR1V0djLH9bsZU",
  authDomain: "careercraft-420.firebaseapp.com",
  projectId: "careercraft-420",
  storageBucket: "careercraft-420.firebasestorage.app",
  messagingSenderId: "724254172911",
  appId: "1:724254172911:web:e9d5aadcf992409991dd1a"
  
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

