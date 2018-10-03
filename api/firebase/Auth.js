import Base from './Base'

export default class Auth extends Base {
  login(type) {
    switch (type) {
      case 'facebook':
        return this.loginWithFacebook
      case 'google':
        return this.loginWithGoogle
      default:
        return this.loginWithEmail
    }
  }

  status() {
    return this.auth.onAuthStateChanged
  }

  logout() {
    return this.auth.signOut
  }

  loginWithEmail(email, password) {
    return new Promise((resolve, reject) => {
      this.auth.signInWithEmailAndPassword(email, password)
        .then(() => {
          resolve('success')
        })
        .catch((e) => {
          reject(e)
        })
    })
  }

  loginWithFacebook() {
    return new Promise((resolve, reject) => {
      this.auth.signInWithPopup(this.auth.FacebookAuthProvider())
        .then((result) => {
          resolve(result)
        })
        .catch((e) => {
          reject(e)
        })
    })
  }

  loginWithGoogle() {
    return new Promise((resolve, reject) => {
      this.auth.signInWithPopup(this.auth.GoogleAuthProvider())
        .then((result) => {
          resolve(result)
        })
        .catch((e) => {
          reject(e)
        })
    })
  }
}
