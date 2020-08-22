import firebase from 'firebase/app'
import 'firebase/auth'

// CHANGE ME
firebase.initializeApp({
  apiKey: '',
  projectId: ''
})

export const auth = firebase.auth()
