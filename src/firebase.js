import firebase from "firebase/compat/app"
import "firebase/compat/auth"

export const auth = firebase.initializeApp(
    {
        apiKey: "AIzaSyC62pZMaWkXgpH1QcwGXTWa7YKSupnZrDI",
        authDomain: "portfolio-5fa86.firebaseapp.com",
        projectId: "portfolio-5fa86",
        storageBucket: "portfolio-5fa86.appspot.com",
        messagingSenderId: "549671098336",
        appId: "1:549671098336:web:9c42b55681cbcedea0bd85"
      }
).auth()