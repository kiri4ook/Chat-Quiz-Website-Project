import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBy2NHjTYP7Gp6_QgzM48ShZhd0gmob0cY",
    authDomain: "chat-quiz-website-project.firebaseapp.com",
    projectId: "chat-quiz-website-project",
    storageBucket: "chat-quiz-website-project.appspot.com",
    messagingSenderId: "641262663115",
    appId: "1:641262663115:web:135f2785b6df4bda7af24e"
};

firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();
const firestore = firebase.firestore();
export const Firebase = firebase;

export default firestore;

