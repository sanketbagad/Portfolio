import firebase from "firebase/app"
import "firebase/auth"

export const auth = firebase.initializeApp(
    {
        apiKey: "AIzaSyAj1k4kgGcP_6o_pJKdviuY6iPOCSxnTXY",
        authDomain: "sbchat-7f8cf.firebaseapp.com",
        projectId: "sbchat-7f8cf",
        storageBucket: "sbchat-7f8cf.appspot.com",
        messagingSenderId: "533485264533",
        appId: "1:533485264533:web:0b69d5d95ebf394386c59c"
      }
).auth()