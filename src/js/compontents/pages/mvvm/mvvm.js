export default class Mvvm {
    constructor(options) {
        this.doc = options.doc
        this._el = this.doc.querySelector(options.el);
        this._data = options.data;
        this.domPool = {};
        this.init();
    }
    init() {
        this.bindDom(this._el);
        this.initEvent();
        this.initData();
    }
    bindDom(_el) {
        const childNodes = _el.childNodes;
        childNodes.forEach((child) => {
            if (child.nodeType === 3) {
                const _value = child.nodeValue;
                if (_value.trim().length) {
                    let _isValid = /\{\{(.+?)\}\}/.test(_value);
                    if (_isValid) {
                        const _key = _value.match(/\{\{(.+?)\}\}/)[1].trim();
                        this.domPool[_key] = child.parentNode;
                        child.parentNode.innerText = this._data[_key] || undefined;
                    }
                }
            }
            child.childNodes && this.bindDom(child);
        });
    }
    initData() {
        this.data = {};
        const _this = this;

        // vue2.0
        // for (let key in this._data) {
        //   Object.defineProperty(this._data, key, {
        //     get() {
        //       return _this.data[key];
        //     },
        //     set(nVal) {
        //       _this.data[key] = nVal;
        //       _this.domPool[key].innerText = nVal;
        //     },
        //   });
        // }

        // vue3.0
        this._data = new Proxy(this.data, {
            get(target, key) {
                return Reflect.get(target, key);
            },
            set(target, key, value) {
                _this.domPool[key].innerText = value;
                return Reflect.set(target, key, value);
            },
        });
    }
    initEvent() {
        const oinputs = this.doc.querySelectorAll("input");
        oinputs.forEach((input) => {
            const vModel = input.getAttribute("v-model");
            input.addEventListener(
                "input",
                this.handleInput.bind(this, vModel, input),
                false
            );
        });
    }
    handleInput(key, input) {
        const _value = input.value;
        this._data[key] = _value;
    }
    setData(key, _value) {
        this._data[key] = _value;
    }
}