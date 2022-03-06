import  firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database'
import 'firebase/firestore';
import 'firebase/storage'

const app = firebase.initializeApp({
  apiKey: "AIzaSyD5-V3iSs3b5-yrwMy89Q1h7cAo9KkGuF0",
  authDomain: "e-inns-administrator.firebaseapp.com",
  projectId: "e-inns-administrator",
  storageBucket: "e-inns-administrator.appspot.com",
  messagingSenderId: "211193138132",
  appId: "1:211193138132:web:3a128a8da6a8bf32866441",
  measurementId: "G-BYM1ZTD353"
});

// Initialize Firebase
export const auth = app.auth();
export const db = app.database();

export default app;
