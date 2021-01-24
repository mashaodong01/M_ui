export default class HashHistory {
  constructor() {
    this.init();
    this.oMain = document.getElementsByTagName("m-container")[0];
  }
  init() {
    this.routeBind();
    this.getCurrent();
  }
  getCurrent() {
    this.current = location.hash.slice(1);
  }
  routeBind() {
    window.addEventListener("hashchange", this.handleRoutingEvent.bind(this));
  }
  handleRoutingEvent() {
    const hash = this.current.slice(1);
    if (!hash) return;
    this.oMain.removeChild(this.oMain.firstElementChild);
    const oContent = document.createElement(`${this.current.slice(1)}-div`);
    this.oMain.appendChild(oContent);
  }
  forceRefresh() {
    this.handleRoutingEvent();
  }
  push(url) {
    this.current = url;
    window.location.hash = url;
  }
}
