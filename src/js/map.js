export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
    this.errors.set(404, 'Not Found');
    this.errors.set(407, 'Proxy Authentication Required');
    this.errors.set(502, 'Bad Gateway');
  }

  translate(code) {
    if (this.errors.has(code)) {
      const messageError = this.errors.get(code);
      throw new Error(messageError);
    } else {
      throw new Error('Unknown error');
    }
  }
}
