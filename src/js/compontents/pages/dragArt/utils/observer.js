class Observer {
  constructor() {
    this.map = {};
  }
  subscribe(fun, observerKey) {
    // this.map = { ...this.map };
    delete this.map[observerKey];
    let value = null;
    Object.defineProperty(this.map, observerKey, {
      get() {
        return value;
      },
      set(nVal) {
        if (nVal !== value) {
          value = nVal;
          fun(nVal);
        }
      },
      configurable: true
    });
  }
  setData(key, val) {
    this.map[key] = val;
  }
}

export default new Observer();
