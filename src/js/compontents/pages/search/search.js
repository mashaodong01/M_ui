import { debounce } from "@/utils/minTools.js";
import request from "@/utils/request.js";
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
    this.oinput.addEventListener(
      "input",
      debounce(this.handleInput.bind(this), 500, false),
      false
    );
  }
  async handleInput(e) {
    const { value } = e.path[0];
    const res = await request('https://www.baidu.com/sugrec?prod=pc&from=pc_web&wd=1', true);
    console.log(res)
  }
}
