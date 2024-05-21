// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXSB1iIR1afdvVpWcY8ff6GIlQRHZlSBM",
  authDomain: "mapachers-web.firebaseapp.com",
  projectId: "mapachers-web",
  storageBucket: "mapachers-web.appspot.com",
  messagingSenderId: "138275537987",
  appId: "1:138275537987:web:e27bbbe207e4773d1540f6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)
