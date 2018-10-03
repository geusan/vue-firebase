import Base from './Base'

export default class Functions extends Base {
  do(name, params) {
    if (typeof params !== 'object') {
      throw Error('firebase functions need json params')
    } else {
      const currFunction = this.functions.httpsCallable(name)
      return currFunction(params)
    }
  }
}
