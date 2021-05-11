import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDcxmsSbWOe2xIXq_cRZgad0HF1ApMEi3s",
    authDomain: "chatapp-daf0c.firebaseapp.com",
    projectId: "chatapp-daf0c",
    storageBucket: "chatapp-daf0c.appspot.com",
    messagingSenderId: "447321125524",
    appId: "1:447321125524:web:e19980780b61244692ba81"
}

let app;

if (!firebase.apps.length) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app();
}

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
