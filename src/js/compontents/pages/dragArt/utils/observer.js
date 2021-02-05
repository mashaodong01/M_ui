class Observer {
    constructor() {
        this.map = {};
        this.funState = {};
    }
    subscribe(fun, observerKey) {
        const isNext = this.bindEvent(fun, observerKey);
        if (!isNext) {
            return;
        }
        // delete this.map[observerKey];
        let value = null;
        const _this = this;
        Object.defineProperty(this.map, observerKey, {
            get() {
                return value;
            },
            set(nVal) {
                if (nVal !== value) {
                    value = nVal;
                    _this.funState[observerKey].forEach(fun => {
                        fun(_this.map[observerKey]);
                    })
                }
            },
            configurable: true
        });
    }
    setData(key, val) {
        this.map[key] = val;
    }
    bindEvent(fun, observerKey) {
        if (this.funState[observerKey]) {
            this.funState[observerKey].push(fun);
            return false;
        } else {
            this.funState[observerKey] = [fun];
            return true;
        }
    }
}

export default new Observer();