import Mvvm from "./mvvm.js";
import _style from "./style.js";
import _template from "./template.js";

const template = document.createElement("template");
template.innerHTML = `
    ${_style}
    ${_template}
`;

export default class MvvmComponent extends HTMLElement {
  constructor() {
    super();
    this.template = template.content.cloneNode(true);
    this.attachShadow({ mode: "open" }).appendChild(this.template);
    this.init();
  }
  init() {
    new Mvvm({
      el: "#mvvm",
      doc: this.shadowRoot,
      data: {
        name: "111",
        age: "222",
        sex: "333",
        height: "444",
      },
    });
  }
}
customElements.define("page-mvvm", MvvmComponent);
