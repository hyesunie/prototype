export default class Observable {
  observers = [];
  constructor() {}

  subscribe(observer) {
    this.observers = [...this.observers, observer];
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter((e) => e !== observer);
  }

  notify(options) {
    this.observers.forEach((observer) => {
      observer(options);
    });
  }
}
