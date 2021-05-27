import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyC-J-TR4IxPsG79V6u_YEH8goT0Dj14vgs',
  authDomain: 'crown-db-562ee.firebaseapp.com',
  projectId: 'crown-db-562ee',
  storageBucket: 'crown-db-562ee.appspot.com',
  messagingSenderId: '255831622770',
  appId: '1:255831622770:web:9156413af3df00e6966eeb',
  measurementId: 'G-PWP55M65MQ',
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
