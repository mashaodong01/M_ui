class Store {
    constructor() {
        this.map = new Map();
        this.valueId = 0;
    }
    add(key, value) {
        this.valueId++;
        if (this.map.has(key)) {
            this.map.get(key).push(value);
            return;
        }
        this.map.set(key, [value]);
    }
    get(key) {
        if (this.map.has(key)) {
            return this.map.get(key);
        }
    }
    clearItem(key) {
        this.map.remove(key);
    }
    getId() {
        return this.valueId;
    }
}

export default new Store();