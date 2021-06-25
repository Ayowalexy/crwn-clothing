import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
        apiKey: "AIzaSyCsGWrLbdLhHYnBhWAYKccxdDtIQ_ylrDI",
        authDomain: "crwn-clothing-c90ad.firebaseapp.com",
        projectId: "crwn-clothing-c90ad",
        storageBucket: "crwn-clothing-c90ad.appspot.com",
        messagingSenderId: "756524418614",
        appId: "1:756524418614:web:4e332e3a9cd2cb7f90ba97",
        measurementId: "G-Z0SMTTG3W9"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;