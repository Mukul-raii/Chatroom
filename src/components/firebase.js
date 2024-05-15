// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmuibI5eQfILxbZo35fkex3WTm8e5oCZw",
  authDomain: "new1-16649.firebaseapp.com",
  projectId: "new1-16649",
  storageBucket: "new1-16649.appspot.com",
  messagingSenderId: "752190862503",
  appId: "1:752190862503:web:d632db3fd766761b5e5782",
  measurementId: "G-66J5DNYV9C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore
const auth = getAuth(app);

// Export the 'db' object along with 'app'
export { app, db, auth };
