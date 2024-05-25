import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCdTTjjf05nJW2h6HpZqgfn4AiWluTN1bg",
  authDomain: "slack-clone-499bc.firebaseapp.com",
  projectId: "slack-clone-499bc",
  storageBucket: "slack-clone-499bc.appspot.com",
  messagingSenderId: "790677283734",
  appId: "1:790677283734:web:1fe59adc9a28f1310d33b7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
