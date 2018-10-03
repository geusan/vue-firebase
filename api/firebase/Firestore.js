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

  save(path, data) {
    // save data
    this.ref(path).set(data)
    this.ref(path).update()
  }
}
