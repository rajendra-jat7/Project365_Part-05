import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBIVf04cAqMSlzvPBmQe0EM0pNXtByr0Ks",
  authDomain: "jcb-management.firebaseapp.com",
  projectId: "jcb-management",
  storageBucket: "jcb-management.firebasestorage.app",
  messagingSenderId: "275911568091",
  appId: "1:275911568091:web:1c1c527f0d83e7e60b7afe",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
