// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPaSC_GyvnJvIDUZ3CLUTdgwWIcGyV7KM",
  authDomain: "miniblog-3106a.firebaseapp.com",
  projectId: "miniblog-3106a",
  storageBucket: "miniblog-3106a.appspot.com",
  messagingSenderId: "75151670818",
  appId: "1:75151670818:web:d8ae46aa14702c18a1d47b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };