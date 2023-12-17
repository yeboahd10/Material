
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBmlhOTQWskmqb8wUfyc7JwGstA_fRbRYo",
  authDomain: "emailpasswordlogin-23232.firebaseapp.com",
  projectId: "emailpasswordlogin-23232",
  storageBucket: "emailpasswordlogin-23232.appspot.com",
  messagingSenderId: "984888281478",
  appId: "1:984888281478:web:40894166614474c2be4407"
};


const app = initializeApp(firebaseConfig);
export const database = getAuth(app)    

export default app