import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCQd07wORy6BBw46Z9z3Q3dwISlD4ldhTY",
    authDomain: "learning-38e55.firebaseapp.com",
    projectId: "learning-38e55",
    storageBucket: "learning-38e55.appspot.com",
    messagingSenderId: "585678660492",
    appId: "1:585678660492:web:d588394043b40b1ab06ca9",
    measurementId: "G-BTXLYN22ZY"
  };

// init firebase

firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }