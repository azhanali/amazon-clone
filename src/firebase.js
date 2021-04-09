import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBVQB92OCu9h_koXRZGzp4R6jFL1qzoH2w",
  authDomain: "clone-22236.firebaseapp.com",
  projectId: "clone-22236",
  storageBucket: "clone-22236.appspot.com",
  messagingSenderId: "314120547969",
  appId: "1:314120547969:web:8d58f8d6a5370b82836780",
  measurementId: "G-JDLQWV0V2Y"
});

const auth = firebase.auth();

export { auth };