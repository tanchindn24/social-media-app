import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
import {FirebaseStorage} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyALyq-Cs1fRR2xvlDQz6Yx8BG789iTTKJk",
    authDomain: "social-media-apps-rn.firebaseapp.com",
    projectId: "social-media-apps-rn",
    storageBucket: "social-media-apps-rn.appspot.com",
    messagingSenderId: "106036921313",
    appId: "1:106036921313:web:d765972a83293cb3f088a0"
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
