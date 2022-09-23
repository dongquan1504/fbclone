import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBeYpWKEsnNbXm8dmNtfjqmsMJLNn8k5go",
  authDomain: "facebook-8e61d.firebaseapp.com",
  projectId: "facebook-8e61d",
  storageBucket: "facebook-8e61d.appspot.com",
  messagingSenderId: "93811050918",
  appId: "1:93811050918:web:4e0d415cea6c781098a767",
};
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

// Use these for db & auth
const db = app.firestore();
const storage = firebase.storage();
console.log(db);

export { storage, db };
