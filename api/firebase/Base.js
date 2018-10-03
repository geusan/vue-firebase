import * as firebase from 'firebase'
import firebaseAdmin from 'firebase-admin'

export default class FirebaseClient {

  constructor() {
    FirebaseClient.build()
  }

  static create() {
    return new FirebaseClient()
  }

  static get CONFIG() {
    return { apiKey: "AIzaSyDH4RVrmWtt-BIJ2AIrUzr9sKHXQarbSmA", authDomain: "geusanlab.firebaseapp.com", databaseURL: "https://geusanlab.firebaseio.com", projectId: "geusanlab", storageBucket: "geusanlab.appspot.com", messagingSenderId: "472698496299" };
  }

  static build() {
    if (!firebase.apps.length) {
      firebase.initializeApp(FirebaseClient.CONFIG)
    }
  }

  static firebase() {
    return firebase
  }

  get storage() {
    return firebase.storage()
  }

  get database() {
    return firebase.database()
  }

  get functions() {
    return firebase.functions()
  }

  get firestore() {
    return firebase.firestore()
  }
}