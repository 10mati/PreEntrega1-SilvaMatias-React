import { initializeApp } from "firebase/app";
import  {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBYUHNksbjRzdeiV-JF5bPoLTAQ4UDTuSk",
  authDomain: "proyectofinal-silvamatias.firebaseapp.com",
  projectId: "proyectofinal-silvamatias",
  storageBucket: "proyectofinal-silvamatias.appspot.com",
  messagingSenderId: "925738056826",
  appId: "1:925738056826:web:cc4dd10984b0356435cfc3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)