class Observer {
    constructor() {
        this.map = {};
    }
    subscribe(fun, observerKey) {
        if (typeof this.map[observerKey] != "undefined") {
            return;
        }
        let value = null;
        Object.defineProperty(this.map, observerKey, {
            get() {
                return value
            },
            set(nVal) {
                value = nVal;
                fun(nVal)
            }
        })
    }
    setData(key, val) {
        this.map[key] = val;
    }
}

export default new Observer();