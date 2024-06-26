// config/firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDR9jMyh32jyww54wAn2G4vHMEhSEAeqsY",
  authDomain: "ebuddy-11b3e.firebaseapp.com",
  projectId: "ebuddy-11b3e",
  storageBucket: "ebuddy-11b3e.appspot.com",
  messagingSenderId: "860914138673",
  appId: "1:860914138673:web:548fd76d01382109d0df10"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
