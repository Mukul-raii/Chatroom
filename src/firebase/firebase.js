
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyAmuibI5eQfILxbZo35fkex3WTm8e5oCZw",
  authDomain: "new1-16649.firebaseapp.com",
  projectId: "new1-16649",
  storageBucket: "new1-16649.appspot.com",
  messagingSenderId: "752190862503",
  appId: "1:752190862503:web:d632db3fd766761b5e5782",
  measurementId: "G-66J5DNYV9C"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


export {app, auth};