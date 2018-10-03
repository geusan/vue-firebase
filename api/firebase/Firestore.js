import Base from './Base';

export default class Firestore extends Base {
  ref(path) {
    const fields = path.split('/')
    let ref = this.firestore
    fields.forEach((f, idx) => {
      if (idx % 2 === 0) {
        ref = ref.collection(f)
      } else {
        ref = ref.doc(f)
      }
    })
    return ref
  }

  create(path, data) {
    return new Promise((resolve, reject) => {
      this.ref(path)
        .doc()
        .set({ ...data, timestamp: this.timestamp })
        .then((ref) => {
          resolve(ref.id)
        })
        .catch((e) => {
          reject(e)
        })
    })
  }

  read(path) {
    return new Promise((resolve, reject) => {
      this.ref(path).get().then((doc) => {
        if (doc.exists) {
          resolve(doc.data())
        } else {
          reject(new Error('doesn\'t exist'))
        }
      }).catch((e) => {
        reject(e)
      })
    })
  }

  readAll(path, condition) {
    return new Promise((resolve, reject) => {
      let tempRef = this.ref(path)
      if (condition) {
        tempRef = tempRef.where(...condition)
      }
      tempRef.get()
        .then((list) => {
          resolve(list)
        })
        .catch((e) => {
          reject(e)
        })
    })
  }

  update(path, data) {
    return new Promise((resolve, reject) => {
      this.ref(path).update({ ...data, timestamp: this.timestamp })
        .then((ref) => {
          resolve(ref)
        })
        .catch((e) => {
          reject(e)
        })
    })
  }

  delete(path) {
    return new Promise((resolve, reject) => {
      this.ref(path).delete()
        .then(() => {
          resolve('Success')
        })
        .catch((e) => {
          reject(e)
        })
    })
  }
}
