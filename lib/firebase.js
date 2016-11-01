import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDb_MSEiUwkq2fOf7uWCVoRF6AQUIlGM-o",
  authDomain: "nimblenetwork-d13c3.firebaseapp.com",
  databaseURL: "https://nimblenetwork-d13c3.firebaseio.com",
  storageBucket: "nimblenetwork-d13c3.appspot.com",
  messagingSenderId: "630209970213"
  }

firebase.initializeApp(config)

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()


export default firebase;
export const signIn = () => auth.signInWithPopup(provider)
export const signOut = () => auth.signOut()
