import firebase from "firebase";
import "firebase/auth";

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyByiH30xOhBGOfEl4ZDYCDLwlD2h-GGCVI",
  authDomain: "simplechat-d9130.firebaseapp.com",
  projectId: "simplechat-d9130",
  storageBucket: "simplechat-d9130.appspot.com",
  messagingSenderId: "984843201254",
  appId: "1:984843201254:web:933296bd83a96bf8f76927",
}).auth();
