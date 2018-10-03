import Base from './Base';

export default class Storage extends Base {
  ref(path) {
    if (path) return this.storage.ref(path)
    else this.storage.ref()
  }

  uploadFile(path, name, file, metadata) {
    return new Promise((resolve, reject) => {
      const task = this.ref(path)
        .child(name)
        .put(file, metadata)
        .on(this.storage.TaskEvent.STATE_CHANGED,
          (snapshot) => {
            switch (snapshot) {
              case this.storage.TaskState.PAUSED:
                break
              case this.storage.TaskState.RUNNING:
                break
              default:
                break
            }
          },
          (error) => {
            switch (error.code) {
              case 'storage/unauthorized':
                break
              case 'storage/canceled':
                break
              case 'storage/unknown':
                break
              default:
                break
            }
            reject(error)
          },
          () => {
            // task is completed
            task.snapshot.ref.getDownloadURL().then((downloadURL) => {
              resolve(downloadURL)
            })
          })
    })
  }

  downloadFile(path, name) {
    return this.storage.ref(path).child(name).getDownloadURL()
  }
}
