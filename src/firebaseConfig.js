import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCXwtldDugCyal2G0AhH3NyuDQVy9YPb2w",
    authDomain: "bmake2020-7dae9.firebaseapp.com",
    databaseURL: "https://bmake2020-7dae9.firebaseio.com",
    projectId: "bmake2020-7dae9",
    storageBucket: "bmake2020-7dae9.appspot.com",
    messagingSenderId: "470873623378",
    appId: "1:470873623378:web:081bf43b94e9797620c88b",
    measurementId: "G-8336FB186P"
});

const db = firebaseApp.firestore();

export default db;