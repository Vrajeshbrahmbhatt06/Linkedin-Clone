import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBsfbxOCZArlcQ8a04fKO2jgycFYGQvEmM",
    authDomain: "linkedin-clone-b1f04.firebaseapp.com",
    projectId: "linkedin-clone-b1f04",
    storageBucket: "linkedin-clone-b1f04.appspot.com",
    messagingSenderId: "115709664386",
    appId: "1:115709664386:web:264bfaed324ef84db4e89b"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };