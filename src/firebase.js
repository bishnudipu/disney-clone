import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAOfT6Q3aXAo2YIVvM90Y2wKHiXc-AP85Q",
  authDomain: "disney-402bc.firebaseapp.com",
  projectId: "disney-402bc",
  storageBucket: "disney-402bc.appspot.com",
  messagingSenderId: "889530920194",
  appId: "1:889530920194:web:fdc20fa4b93cab05ede61b",
  measurementId: "G-4VRCKVNWJS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

const storage = firebase.storage();

export { auth, provider, storage };

export default db;
