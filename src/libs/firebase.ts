import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    // apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSEAGINGSENDERID,
    // appId: process.env.REACT_APP_FIREBASE_APPID,
    // measurementId: "G-DLFEXF77HG"

    apiKey: "AIzaSyCVaxfJvkkcRqM1DLLkmzhEXr8GOhD3ih0",
    authDomain: "d5reactgalery-aeded.firebaseapp.com",
    projectId: "d5reactgalery-aeded",
    storageBucket: "d5reactgalery-aeded.appspot.com",
    messagingSenderId: "30126949702",
    appId: "1:30126949702:web:89b99216459aa4720cd147",
    measurementId: "G-DLFEXF77HG"
};

const firebaseApp = initializeApp(firebaseConfig);

export const storage = getStorage(firebaseApp);