import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDPZx8NYJQrlzWuzfW1IObRymwqQzFghnY",
    authDomain: "muso-ninjas-8a618.firebaseapp.com",
    projectId: "muso-ninjas-8a618",
    storageBucket: "muso-ninjas-8a618.appspot.com",
    messagingSenderId: "55694093026",
    appId: "1:55694093026:web:780aee8b6edddf6b000cbb"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }