import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBB9zJFI0eX_UFvTnSgQENRyaZXCCBnFbk",
  authDomain: "sallytube-4b467.firebaseapp.com",
  projectId: "sallytube-4b467",
  storageBucket: "sallytube-4b467.appspot.com",
  messagingSenderId: "700855333160",
  appId: "1:700855333160:web:84e203d7e588247ae0201d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;