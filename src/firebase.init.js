// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import{getAuth} from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDy0vr1JLG7uzNCX46LYGB4hiim7h5YC7E",
  authDomain: "my-shopping-app-8e034.firebaseapp.com",
  projectId: "my-shopping-app-8e034",
  storageBucket: "my-shopping-app-8e034.appspot.com",
  messagingSenderId: "1059368866544",
  appId: "1:1059368866544:web:d7de92119c98b8bf79e835"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default app;