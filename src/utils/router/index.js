export default class HashHistory {
    constructor(routerData) {
        this.oMain = document.getElementsByTagName("m-container")[0];
        this.routerData = routerData;
        this.init();
    }
    init() {
        this._initData();
        this._routeBind();
        this._getCurrent();
    }
    _initData() {
        const data = new Map();
        this.routerData.forEach(router => {
            data.set(router.path, router)
        })
        this.routerData = data;
    }
    _getCurrent() {
        this.current = location.hash.slice(1);
    }
    _routeBind() {
        window.addEventListener("hashchange", this._handleRoutingEvent.bind(this));
        window.addEventListener("popstate", this._handleRoutingEvent.bind(this));
    }
    _handleRoutingEvent() {
        const hash = this.current === "" ? "/" : this.current;
        if (!this.routerData.has(hash)) {
            alert('没有这个页面');
            return;
        };
        let router = this.routerData.get(hash);
        if (router.redirect) {
            this._redirect(router.redirect)
        } else {
            this._render(router.component);
        }
    }
    _redirect(redirect) {
        this.push(redirect)
    }
    _render(component) {
        this.oMain.removeChild(this.oMain.firstElementChild);
        const oContent = document.createElement(component);
        this.oMain.appendChild(oContent);
    }
    forceRefresh() {
        this._handleRoutingEvent();
    }
    push(url) {
        this.current = url;
        window.location.hash = url;
        // window.history.pushState(null, '', url)
    }
}