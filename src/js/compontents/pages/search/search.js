export default class Search {
  constructor(options) {
    this.odom = options.doc.querySelector(options.el);
    this.oinput = this.odom.querySelector("input");
    this.init();
  }
  init() {
    this.initEvent();
  }
  initEvent() {
    this.oinput.addEventListener("input", this.handleInput.bind(this), false);
  }
  handleInput(e) {
    console.log(e.target.value)
  }
}
