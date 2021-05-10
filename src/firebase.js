import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAoNQBwsNeV63Pj9T6ay4bVc4mYpuy3F1I",
  authDomain: "disneyplus-clone-100f4.firebaseapp.com",
  projectId: "disneyplus-clone-100f4",
  storageBucket: "disneyplus-clone-100f4.appspot.com",
  messagingSenderId: "585807968896",
  appId: "1:585807968896:web:5fb217d96e90d50cf30465",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
