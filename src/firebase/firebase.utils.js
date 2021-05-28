import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const config = {
  apiKey: 'AIzaSyC-J-TR4IxPsG79V6u_YEH8goT0Dj14vgs',
  authDomain: 'crown-db-562ee.firebaseapp.com',
  projectId: 'crown-db-562ee',
  storageBucket: 'crown-db-562ee.appspot.com',
  messagingSenderId: '255831622770',
  appId: '1:255831622770:web:9156413af3df00e6966eeb',
  measurementId: 'G-PWP55M65MQ',
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapshot = await userRef.get()

  if (!snapshot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (err) {
      console.log('Error creating user', err.message)
    }
  }
  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
