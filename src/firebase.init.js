// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId

    /* apiKey='AIzaSyB4CDoRabzHsQ7McM6WY9m3oSeaJ25z_lg',
    authDomain='genius-car-services-f5b24.firebaseapp.com',
    projectId='genius-car-services-f5b24',
    storageBucket='genius-car-services-f5b24.appspot.com',
    messagingSenderId='278941790307',
    appId='1:278941790307:web:8ca4425fd12adfe3244856' */
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;