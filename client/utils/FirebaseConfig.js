import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB620cLSriBjcGfqRRtQ57Bdr8nzEHqNrQ",
  authDomain: "whatsapp-clone-a31e5.firebaseapp.com",
  projectId: "whatsapp-clone-a31e5",
  storageBucket: "whatsapp-clone-a31e5.appspot.com",
  messagingSenderId: "591245668248",
  appId: "1:591245668248:web:4eaa4ef659a59f0abcc5ed",
  measurementId: "G-T5PV1SL75N",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
export { app, auth };
