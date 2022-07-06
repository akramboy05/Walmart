import * as firebase from "firebase/app";
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDtVR5bNElc4mLLLwnI1YeVuR5otyoIemc",
    authDomain: "walmart-f6b6f.firebaseapp.com",
    projectId: "walmart-f6b6f",
    storageBucket: "walmart-f6b6f.appspot.com",
    messagingSenderId: "1009158252833",
    appId: "1:1009158252833:web:2a01361a1fe32d65187660",
    measurementId: "G-WFZGGW0GFH"
}

const app = firebase.initializeApp(firebaseConfig)
const db = app.firestore()


export { db, firebase }