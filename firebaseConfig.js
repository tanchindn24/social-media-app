import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyALyq-Cs1fRR2xvlDQz6Yx8BG789iTTKJk",
    authDomain: "social-media-apps-rn.firebaseapp.com",
    projectId: "social-media-apps-rn",
    storageBucket: "social-media-apps-rn.appspot.com",
    messagingSenderId: "106036921313",
    appId: "1:106036921313:web:d765972a83293cb3f088a0"
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };