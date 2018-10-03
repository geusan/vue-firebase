import * as firebase from 'firebase'
import firebaseAdmin from 'firebase-admin'
import config from './config'

export default class FirebaseClient {
  constructor() {
    FirebaseClient.build()
  }

  static create() {
    return new FirebaseClient()
  }

  static get CONFIG() {
    return config
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

  get auth() {
    return firebase.auth()
  }

  get timestamp() {
    return firebaseAdmin.firestore.FieldValue.serverTimestamp()
  }

  get fieldValue() {
    return firebaseAdmin.firestore.FieldValue
  }
}
