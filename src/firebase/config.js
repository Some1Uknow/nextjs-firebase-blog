import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCWyWLe3cJTKIyTH5XbEqe71RUigfr3AAY",
  authDomain: "zeta-portal-418709.firebaseapp.com",
  projectId: "zeta-portal-418709",
  storageBucket: "zeta-portal-418709.appspot.com",
  messagingSenderId: "505239241356",
  appId: "1:505239241356:web:ce1eab3dd13367f875f1a9",
  measurementId: "G-34VMC95QWF"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);